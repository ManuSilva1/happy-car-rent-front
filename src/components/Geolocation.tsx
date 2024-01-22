import React, { useState, useEffect } from 'react';
import '../css/Geolocation.css';
import  GeolocationPosition  from 'typescript';
import { DatosdaLojas, getInboxItems } from '../Utils/DadosdaLojas';

const Localizacao = () => {
  const [localizacaoAtual, setLocalizacaoAtual] = useState<GeolocationPosition | null>(null);
  const [temperaturaAtual, setTemperaturaAtual] = useState<number | null>(null);

 const obterLocalizacao = async () => {
  try {
    const position = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    if (position && position.coords) {
      setLocalizacaoAtual(position);
    }
  } catch (error) {
    console.error('Erro ao obter a localização:', error);
  }
};


  // Função para obter informações meteorológicas com base na localização
  const obterInformacaoMeteorologica = async (lat: number, lon: number) => {
    const apiKey ='a5c6de5d4a806c0d61ab29d8d7649bb8';
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.main && data.main.temp) {
        setTemperaturaAtual(data.main.temp);
      }
    } catch (error) {
      console.error('Erro ao obter informações meteorológicas:', error);
    }
  };



  useEffect(() => {
    obterLocalizacao();
  }, []);

  // Quando a localização é obtida, chama a função para obter informações meteorológicas
  useEffect(() => {
    if (localizacaoAtual && localizacaoAtual.coords && localizacaoAtual.coords.latitude !== 0 && localizacaoAtual.coords.longitude !== 0) {
      obterInformacaoMeteorologica(localizacaoAtual.coords.latitude, localizacaoAtual.coords.longitude);
    }
  }, [localizacaoAtual]);


// Função para calcular a distância entre dois pontos usando a fórmula haversine
const calcularDistancia = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const raioTerra = 6371; 

  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distancia = raioTerra * c;

  return distancia;
};

const lojas = getInboxItems(); 

const distanciasLojas = lojas.map((loja: DatosdaLojas) => {
  const distancia = calcularDistancia(
    localizacaoAtual?.coords?.latitude ?? 0,
    localizacaoAtual?.coords?.longitude ?? 0,
    loja.latitude,
    loja.longitude
  );

  return { nome: loja.name, distancia };
});


// Ordena as lojas com base na distância
distanciasLojas.sort((a, b) => a.distancia - b.distancia);

  useEffect(() => {
    obterLocalizacao();
  }, []);

  
  return (
    <div>
      {/* Se há localização, exibe informações sobre as lojas mais próximas */}
      {localizacaoAtual ? (
        <div>
          <p>Sua localização atual: Latitude {localizacaoAtual.coords.latitude.toFixed(6)}, Longitude {localizacaoAtual.coords.longitude.toFixed(6)}</p>
          
          {temperaturaAtual !== null && <p>Temperatura atual: {temperaturaAtual} °C</p>}

          {/* Se há localização e temperatura, renderize mais conteúdo... */}
          {localizacaoAtual && temperaturaAtual !== null && (
        <div>
          <p>Outros detalhes com base na localização.</p>
        </div>
          )}

          {/* Exibe informações sobre as lojas mais próximas, se houverem */}
          {distanciasLojas.map((loja) => (
            <p key={loja.nome}>Loja: {loja.nome}, Distância: {loja.distancia.toFixed(2)} km</p>
          ))}
        </div>
      ) : (
        <p>Aguardando a obtenção da localização...</p>
      )}

    </div>
  );
};


export default Localizacao;

