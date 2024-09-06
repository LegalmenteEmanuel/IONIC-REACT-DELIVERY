import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import LoginForm from '../components/LoginCompnents/LoginForm';
import './CSS/LoginPage.css';
import LoginImage from "../assets/login/Mobile login-rafiki.svg"

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid className="login-page-grid">
          <IonRow className="ion-align-items-center login-page-row">
            <IonCol size="0" size-md="6" className="login-page-image-col">
              <img src={LoginImage} alt="Login Illustration" className="login-page-image" />
            </IonCol>
            <IonCol size="12" size-md="6">
              <LoginForm />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
