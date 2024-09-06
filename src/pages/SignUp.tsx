import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import SignUpForm from '../components/SignUpComponents/SignUpForm';
import './CSS/Registration.css';
import SignImage from "../assets/Sign-up/Sign up-amico.svg"

const SignUpPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid className="sign-page-grid">
          <IonRow className="ion-align-items-center sign-page-row">
            <IonCol size="0" size-md="6" className="sign-page-image-col">
              <img src={SignImage} alt="Sign Illustration" className="sign-page-image" />
            </IonCol>
            <IonCol size="12" size-md="6">
              <SignUpForm />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignUpPage;
