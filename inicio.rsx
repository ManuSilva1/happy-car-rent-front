import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonFooter, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import { useParams } from 'react-router';
import '../css/Inicio.css';

const Inicio: React.FC = () => {


  
  const { name } = useParams<{ name: string; }>();
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonContent className="ion-padding">
      <div className="company-presentation">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7SH_6gzdcnRYE1G78UvgJn6U9JZKLHCJMaE3bczYzXROKGjr_Y4s9ZU_4EuCJKO_f9A&usqp=CAU" alt="Logo da Empresa"/>
    <h1>Bem-vindo à [Nome da Empresa]</h1>
    <p>Sua escolha para soluções de mobilidade inovadoras e confiáveis.</p>
  </div>

  <div className="black-friday-campaign">
    <img src="https://imagenes.elpais.com/resizer/Wdv9aRGgmuCH1aD8nrZdxguZTTc=/1960x1103/filters:focal(598x325:608x335)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/L72UFW2O3RBVNKJ4BBNVI2CKXE.png" alt="Banner Black Friday"/>
    <p>Aproveite! Descontos incríveis durante toda a semana da Black Friday. Não perca a oportunidade de adquirir seu veículo com condições exclusivas.</p>
  </div>

  <div className="awards">
    <h2>Orgulhosamente Reconhecidos</h2>
    <ul>
      <li>Melhor Empresa de Transporte - Prêmio [Nome do Prêmio] 20XX</li>
      <li>Inovação em Mobilidade - Prêmio [Nome do Prêmio] 20XX</li>
    </ul>
  </div>

  <div className="new-cars">
    <img src="https://noticias.coches.com/wp-content/uploads/2022/02/berlinas-grandes-2023-700x357.jpeg" alt="Novos Modelos"/>
    <p>Descubra a nossa mais recente frota de veículos! Apresentamos os modelos mais modernos e eficientes para oferecer conforto e segurança.</p>
  </div>


  <div className="ionic-technology">
    <p>Aqui na [Nome da Empresa], adotamos a mais recente tecnologia para oferecer uma experiência excepcional aos nossos usuários. Aproveitamos os recursos avançados do IONIC para garantir uma navegação intuitiva e uma experiência de usuário imersiva.</p>
  </div>
  <IonCard>
      <IonCardHeader>
        <IonCardTitle>Veiculos Novos</IonCardTitle>
        <IonCardSubtitle>2024</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img  src="https://decodiaz.es/5022-large_default/etiquetas-adhesivas-10-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel>Mercedes CLA</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img src="https://decodiaz.es/5023-home_default/etiquetas-adhesivas-20-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel>Volkswagen Tayron</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img  src="https://decodiaz.es/5024-large_default/etiquetas-adhesivas-30-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel>Ford Explorer EV

            </IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img  src="https://decodiaz.es/5025-large_default/etiquetas-adhesivas-40-rojoblanco-500-unidades.jpg" />
            </IonThumbnail>
            <IonLabel>Cupra Tavascan</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
      </IonContent>
      </IonContent>
   
      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>

    
  );
};

export default Inicio;