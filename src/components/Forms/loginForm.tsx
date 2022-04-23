import {
  IonItem,
  IonButton,
  IonInput,
  useIonRouter,
  IonLabel,
  // IonContent,
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.js";

const LoginForm: React.FC = () => {
  const [tempName, setTempName] = useState<string>();
  const [tempPassword, setTempPassword] = useState<any>();
  const [showToast, setShowToast] = useState(false);
  const router = useIonRouter();
  const { login } = useAuth();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    login(tempName, tempPassword)
    .then(() => {
      router.push("/tab1");
    }).catch(() => {
      // console.log('wrong password')
      setShowToast(true);
    })
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
          <IonLabel position="floating">Name</IonLabel>
          <IonInput onIonChange={(e) => setTempName(e.detail.value!)}></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
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
