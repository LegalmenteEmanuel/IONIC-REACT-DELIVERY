import React from 'react';
import { IonContent, IonPage, IonButton, IonImg, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './CSS/Home.css';  // Asegúrate de importar tus estilos personalizados
import logo from '../assets/landing/4now.svg';  // Asegúrate de importar la imagen correctamente

const Home: React.FC = () => {
  const history = useHistory();

  const handleOrderNow = () => {
    history.push('/login');
  };

  return (
    <IonPage id="home-page">
      <IonContent fullscreen className="home-content">
        <div className="home-container">
          <IonText className="home-title">
            <h2>4Now tu delivery favorito.</h2>
          </IonText>
          <IonText className="home-subtitle">
            <p>Busca los mejores restaurantes, farmacias, tiendas de conveniencia y demás negocios de tu ciudad.</p>
          </IonText>
          <IonImg src={logo} className="home-logo" alt="4Now Logo" />
          <IonButton expand="block" className="home-button" onClick={handleOrderNow}>
            ¡Ordena ya!
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
