import {
  IonItem,
  IonButton,
  IonInput,
  useIonRouter,
  IonLabel,
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.js";
import { SplashScreen } from "@capacitor/splash-screen";

const LoginForm: React.FC = () => {
  const [tempName, setTempName] = useState<any>();
  const [tempPassword, setTempPassword] = useState<any>();
  const [showToast, setShowToast] = useState(false);
  const router = useIonRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
    localStorage.setItem('upass', tempPassword)
    localStorage.setItem('uname', tempName)
    login(tempName, tempPassword)
      .then(() => {
        router.push("/tab2");
      })
      .catch(() => {
        setShowToast(true);
      });
  };

  return (
    <>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Incorrect username or password"
        duration={2000}
        color="danger"
        position="top"
      />
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <IonItem>
          <IonLabel position="floating">username</IonLabel>
          <IonInput
            onIonChange={(e) => setTempName(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">password</IonLabel>
          <IonInput
            type="password"
            onIonChange={(e) => setTempPassword(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonButton className="ion-margin-top" type="submit" expand="block">
          Log In
        </IonButton>
      </form>
    </>
  );
};

export default LoginForm;
