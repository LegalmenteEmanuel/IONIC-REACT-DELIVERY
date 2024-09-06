import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonIcon, IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
import { eyeOff, eye, logoGoogle, logoFacebook, logoApple } from 'ionicons/icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = (values: { email: string; password: string }) => {
    console.log('Login:', values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
    password: Yup.string().required('Contraseña es requerida'),
  });

  return (
    <IonGrid className="login-grid">
      <IonRow className="ion-justify-content-center ion-align-items-center login-row">
        <IonCol size="12" size-md="6">
          <IonText color="primary">
            <h2>Ingrese a su cuenta</h2>
          </IonText>
          <IonText color="medium">
            <p>Por favor inicie con su cuenta.</p>
          </IonText>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ handleChange, handleBlur, values }) => (
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
                <IonText color="medium" className="ion-text-end">
                  <p><a href="#">¿Olvidaste tu contraseña?</a></p>
                </IonText>
                <IonButton type="submit" expand="block" style={{ marginTop: '16px', marginBottom: '16px' }}>
                  Iniciar sesión
                </IonButton>
              </Form>
            )}
          </Formik>
          <IonText color="medium">
            <p className="ion-text-center">O inicia con</p>
          </IonText>
          <IonRow className="ion-justify-content-center">
            <IonIcon icon={logoGoogle} size="large" className="custom-google-icon" style={{ margin: '0 10px', cursor: 'pointer' }} />
            <IonIcon icon={logoFacebook} size="large" className="custom-facebook-icon" style={{ margin: '0 10px', cursor: 'pointer' }} />
            <IonIcon icon={logoApple} size="large" className="custom-apple-icon" style={{ margin: '0 10px', cursor: 'pointer' }} />
          </IonRow>
          <IonText color="medium" className="ion-text-center">
            <p>¿No tienes una cuenta? <a href="/sign">Regístrate</a></p>
          </IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default LoginForm;
