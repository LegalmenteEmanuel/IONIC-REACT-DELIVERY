import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonIcon, IonText, IonGrid, IonRow, IonCol, IonCheckbox } from '@ionic/react';
import { eyeOff, eye, logoGoogle, logoFacebook, logoApple } from 'ionicons/icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './SignUpForm.css';

const SignForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = (values: { email: string; password: string, user: string, acceptTerms: boolean }) => {
    console.log('Login:', values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
    user: Yup.string().required('Nombre de usuario requerido'),
    acceptTerms: Yup.bool().oneOf([true], 'Debe aceptar los términos y condiciones').required('Debe aceptar los términos y condiciones')
  });

  return (
    <IonGrid className="sign-grid">
      <IonRow className="ion-justify-content-center ion-align-items-center sign-row">
        <IonCol size="12" size-md="6">
          <IonText color="primary">
            <h2>Crea tu cuenta nueva.</h2>
          </IonText>
          <IonText color="medium">
            <p>Crea una cuenta para poder ingresar y ver todos los negocios fascinante a tú alrededor.</p>
          </IonText>
          <Formik
            initialValues={{ email: '', password: '', user: '', acceptTerms: false }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ handleChange, handleBlur, values, setFieldValue }) => (
              <Form>
                <IonItem>
                  <IonLabel position="floating">Correo electrónico</IonLabel>
                  <IonInput
                    name="email"
                    type="email"
                    onIonChange={handleChange}
                    onIonBlur={handleBlur}
                    value={values.email}
                    className="ion-input-custom"
                  />
                </IonItem>
                <IonText className="error-message">
                  <ErrorMessage name="email" component="div" />
                </IonText>
                <IonItem>
                  <IonLabel position="floating">Nombre de usuario</IonLabel>
                  <IonInput
                    name="user"
                    type="text"
                    onIonChange={handleChange}
                    onIonBlur={handleBlur}
                    value={values.user}
                    className="ion-input-custom"
                  />
                </IonItem>
                <IonText className="error-message">
                  <ErrorMessage name="user" component="div" />
                </IonText>
                <IonItem>
                  <IonLabel position="floating">Contraseña</IonLabel>
                  <IonInput
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    onIonChange={handleChange}
                    onIonBlur={handleBlur}
                    value={values.password}
                    className="ion-input-custom"
                  />
                  <IonIcon
                    slot="end"
                    icon={showPassword ? eyeOff : eye}
                    onClick={handleClickShowPassword}
                    style={{ cursor: 'pointer' }}
                  />
                </IonItem>
                <IonText className="error-message">
                  <ErrorMessage name="password" component="div" />
                </IonText>
                <IonItem lines="none">
                  <IonCheckbox
                    name="acceptTerms"
                    checked={values.acceptTerms}
                    onIonChange={e => setFieldValue('acceptTerms', e.detail.checked)}
                  />
                  <IonLabel>
                    Acepto los <a href="#">términos y condiciones</a>
                  </IonLabel>
                </IonItem>
                <IonText className="error-message">
                  <ErrorMessage name="acceptTerms" component="div" />
                </IonText>
                <IonButton type="submit" expand="block" style={{ marginTop: '16px', marginBottom: '16px' }}>
                  Registrarse
                </IonButton>
              </Form>
            )}
          </Formik>
          <IonText color="medium">
            <p className="ion-text-center">O regístrate con</p>
          </IonText>
          <IonRow className="ion-justify-content-center">
            <IonIcon icon={logoGoogle} size="large" className="custom-google-icon" style={{ margin: '0 10px', cursor: 'pointer' }} />
            <IonIcon icon={logoFacebook} size="large" className="custom-facebook-icon" style={{ margin: '0 10px', cursor: 'pointer' }} />
            <IonIcon icon={logoApple} size="large" className="custom-apple-icon" style={{ margin: '0 10px', cursor: 'pointer' }} />
          </IonRow>
          <IonText color="medium" className="ion-text-center">
            <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default SignForm;
