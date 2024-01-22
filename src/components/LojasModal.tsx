import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonImg } from '@ionic/react';

interface LojasModalProps {
  itemSelected: DatosdaLojas | null;
  onClose: (feito: boolean, id: number) => void;
}

interface DatosdaLojas {
  id: number;
  name: string;
  instructions: string;
  morada: string;
  image?: string;
  latitude: number;
  longitude: number; 
}

const LojasModal: React.FC<LojasModalProps> = ({ itemSelected, onClose }) => {
  const history = useHistory();

  const verFrota = (storeId: number) => {
    const frotaPageUrl = `/frota/${storeId}`;
    history.push(frotaPageUrl);
  };

  return (
    <IonModal isOpen={itemSelected !== null}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{itemSelected?.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onClose(false, itemSelected!.id)}>Fechar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>{itemSelected?.instructions}</p>
        <IonImg
          src={itemSelected?.image}
          alt="Lojas"
        />
        <IonButton onClick={() => verFrota(itemSelected!.id)}>Ver Frota</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default LojasModal;
