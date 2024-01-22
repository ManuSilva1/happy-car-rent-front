import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import { useParams } from 'react-router';
import '../css/Inicio.css';
import Localização from '../components/Geolocation';
import React, { useState, useEffect } from 'react';
import { IonSearchbar } from '@ionic/react';


const Inicio: React.FC = () => {  
  const { name } = useParams<{ name: string; }>();

  useEffect(() => {
    const fetchInicio = async () => {
      try {
        const response = await fetch('http://localhost:3000/Inicio');
        const lojaData = await response.json();

      } catch (error) {
        console.error('Erro ao obter dados das lojas:', (error as Error).message);
      }
    };
      fetchInicio();
    }, []);

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
        <IonContent fullscreen>
        <IonContent className="ion-padding">
      <div className="company-presentation">
    <h1>Bem-vindo à Happy-Car-Rent</h1>
    <p>Descubra a liberdade de explorar novos destinos com a Happy-Car-Rent. Oferecemos soluções inovadoras e confiáveis, 
      garantindo não apenas veículos de qualidade, mas também uma experiência excepcional de aluguel de carros. 
      Torne suas viagens emocionantes e confortáveis - somos a escolha confiável para mobilidade confiável e inovadora.</p>
    <h1>Promoção Exclusiva</h1>
  </div>

    
  <div className="black-friday-campaign">
    <img src="https://imagenes.elpais.com/resizer/Wdv9aRGgmuCH1aD8nrZdxguZTTc=/1960x1103/filters:focal(598x325:608x335)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/L72UFW2O3RBVNKJ4BBNVI2CKXE.png" alt="Banner Black Friday"/>
    <p>Aproveite! Durante a Black Friday, descontos de até 40% em aluguel de carros. Explore novos destinos com condições exclusivas 
      e crie memórias especiais. Não perca!</p>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Promoções Black Friday</IonCardTitle>
        <IonCardSubtitle>2024</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img  src="https://decodiaz.es/5022-large_default/etiquetas-adhesivas-10-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel><h1>Promo Descubra10</h1></IonLabel>
            <p>Descubra novos destinos com 10% de desconto no aluguel do seu carro de férias! Reserve agora e aproveite a liberdade de explorar a seu próprio ritmo.</p>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img src="https://decodiaz.es/5023-home_default/etiquetas-adhesivas-20-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel><h1>Oferta Aventure-se20</h1></IonLabel>
            <p>Aventure-se com 20% de desconto no aluguel do seu veículo! Seja você um aventureiro solo ou uma família em busca de diversão, nossos carros estão prontos para levá-lo à sua próxima grande aventura.</p>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img  src="https://decodiaz.es/5024-large_default/etiquetas-adhesivas-30-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel><h1>Especial Relax30</h1></IonLabel>
            <p>Desfrute de umas férias relaxantes com 30% de desconto em todas as reservas de aluguel de carros! Permita-se o luxo de viajar com conforto e conveniência, sem comprometer seu orçamento.</p>
          
          </IonItem>
          
          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img  src="https://decodiaz.es/5025-large_default/etiquetas-adhesivas-40-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel><h1>Super Viagem40</h1></IonLabel>
            <p>Faça uma super viagem com um desconto especial de 40% no aluguel do seu carro! Torne suas férias inesquecíveis, economizando enquanto viaja pelas estradas com um veículo de qualidade.</p>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  </div>

  <div className="awards">
    <h2>Reconhecimento com Orgulho</h2>
    <ul>
      <li>Eleita Melhor Empresa de Transporte - Prêmio EnerTech Visionário 2017</li>
      <li>Honra pela Inovação em Mobilidade - Prêmio LogiMaster 2018</li>
      <li>Destaque como Melhor Empresa de Tecnologia Sustentável - Prêmio EcoInovação 2021</li>
      <li>Aclamação pela Excelência em Serviços de Logística - Prêmio LogiMaster 2023</li>
    </ul>
</div>


  <div className="new-cars">
    <h1>Nossos veículos</h1>
    <img src="https://noticias.coches.com/wp-content/uploads/2022/02/berlinas-grandes-2023-700x357.jpeg" alt="Novos Modelos"/>
    <p>Descubra nossa nova frota de veículos! Modelos modernos, eficientes e luxuosos, oferecendo uma experiência de condução 
      excepcional. De compactos a SUVs, atendemos a diversas preferências com conforto, segurança e estilo em cada jornada.
    </p>
    <h1>Explore distâncias curtas até lojas a partir da sua localização.</h1> 
 
 
  </div>


  
    <Localização />
   
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;