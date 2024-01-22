import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonImg } from '@ionic/react';
import '../css/FrotaModal.css';

interface FrotaModalProps {
  itemSelected: Veículos | null;
  onClose: (feito: boolean, id: number) => void;
}

interface Veículos {
  id: number;
  nome: string;
  categoria: any;
  descripção: string;
  Dadostécnicos: {
    motor?: string;
    potencia?: string;
    transmissão?: string;
    combustível?: string;
    capacidade?: string;
  };
  Preço: string;
  image?: string;
  storeId: number[];
}

const FrotaModal: React.FC<FrotaModalProps> = ({ itemSelected, onClose }) => {
  return (
    <IonModal isOpen={itemSelected !== null}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{itemSelected?.nome}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => onClose(false, itemSelected!.id)}>Fechar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>{itemSelected?.descripção}</p>

        {/* Accede a las propiedades específicas de Dadostécnicos */}
        {itemSelected?.Dadostécnicos && (
          <>
            <p>Motor: {itemSelected.Dadostécnicos.motor}</p>
            <p>Potencia: {itemSelected.Dadostécnicos.potencia}</p>
            <p>Transmissão: {itemSelected.Dadostécnicos.transmissão}</p>
            <p>Combustível: {itemSelected.Dadostécnicos.combustível}</p>
            <p>Capacidade: {itemSelected.Dadostécnicos.capacidade}</p>
  
          </>
        )}

        <p>{itemSelected?.Preço}</p>
        <IonImg src={itemSelected?.image} alt="Veiculo" />
        <IonButton onClick={() => onClose(true, itemSelected!.id)}>Alugar</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default FrotaModal;
