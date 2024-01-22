import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonLabel,
  IonThumbnail,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import { getInboxItems } from '../Utils/Veículos';
import FrotaModal from '../components/FrotaModal';
import '../css/Frota.css';

interface Veículos {
  categoria: any;
  id: number;
  nome: string;
  descripção: string;
  Dadostécnicos: {
    motor?: string;
    potencia?: string;
    transmissão?: string;
    combustível?: string;
    capacidade?: string;
  };
  Preço: string;
  storeId: number[];
  image: string;
}

const Frota: React.FC = () => {
  const [VeículoSelected, setVeículoSelected] = useState<Veículos | null>(null);
  const [Veículos] = useState<Veículos[]>(getInboxItems());
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");
  const { storeId } = useParams<{ storeId?: string }>();

  const VeículosOrdenados = Veículos.sort((a, b) => a.categoria.localeCompare(b.categoria));
  const VeículosFiltrados = (storeId
    ? VeículosOrdenados.filter((Veículo) => Veículo.storeId.includes(parseInt(storeId, 10)))
    : VeículosOrdenados
  ).filter((Veículo) => categoriaSelecionada === "Todas" || Veículo.categoria === categoriaSelecionada);

  useEffect(() => {
    const fetchFrota = async () => {
      try {
        const response = await fetch('http://localhost:3000/Frota');
        const frotaData = await response.json();
        console.log('Dados da Frota:', frotaData);
        setFrota(frotaData);
      } catch (error) {
        console.error('Erro ao obter dados das frota:', (error as Error).message);
      }
    };
    fetchFrota();
  }, []);

  const handleClickVeículo = async (Veículo: Veículos) => {
    setVeículoSelected(Veículo);
  };

  const handleCloseModal = () => {
    setVeículoSelected(null);
  };

  const handleCategoriaChange = (e: CustomEvent) => {
    setCategoriaSelecionada(e.detail.value);
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonSearchbar />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <IonSelect
          value={categoriaSelecionada}
          placeholder="Filtrar por Categoria"
          onIonChange={(e: CustomEvent) => handleCategoriaChange(e)}
        >
          <IonSelectOption value="Todas">Todas as Categorias</IonSelectOption>
          <IonSelectOption value="SUV">SUV</IonSelectOption>
          <IonSelectOption value="Coupe">Coupe</IonSelectOption>
          <IonSelectOption value="Elétrico">Elétrico</IonSelectOption>
          <IonSelectOption value="Hatchback">Hatchback</IonSelectOption>
          <IonSelectOption value="Pick-up">Pick-up</IonSelectOption>
          <IonSelectOption value="Sedan">Sedan</IonSelectOption>
          
        </IonSelect>
        <IonList>
          {VeículosFiltrados.map((Veículo, index) => (
            <IonCard key={`Veículo_${index}`} onClick={() => handleClickVeículo(Veículo)}>
              <IonCardHeader>
                <IonCardTitle>{Veículo.nome}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <div className="thumbnail-container">
                  <IonThumbnail slot="start">
                    <img alt={Veículo.nome} src={Veículo.image} />
                  </IonThumbnail>
                  <div className="info-container">
                    <IonLabel>{Veículo.categoria}</IonLabel>
                  </div>
                </div>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
      <FrotaModal itemSelected={VeículoSelected} onClose={handleCloseModal} />
    </IonPage>
  );
  
          }
          
export default Frota;

function setFrota(frotaData: any) {

}


