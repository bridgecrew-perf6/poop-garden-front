import {
  IonItem,
  IonButton,
  IonInput,
  useIonRouter,
  IonLabel,
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
import useResourceUsers from "../../hooks/useResourceUsers";

const SignupForm: React.FC = () => {
  const [tempName, setTempName] = useState<string>();
  const [tempPassword, setTempPassword] = useState<any>();
  const [tempEmail, setTempEmail] = useState<any>();
  const [showToast, setShowToast] = useState(false);
  const router = useIonRouter();
  const { createResourceUsers } = useResourceUsers();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    createResourceUsers({
      username: tempName,
      email: tempEmail,
      password: tempPassword,
    })
      .then(() => {
        router.push("/tab3");
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
        message="Unfortunately, that username has been taken"
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
          <IonInput
            onIonChange={(e) => setTempName(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            onIonChange={(e) => setTempPassword(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            onIonChange={(e) => setTempEmail(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonButton className="ion-margin-top" type="submit" expand="block">
          Sign Up
        </IonButton>
      </form>
    </>
  );
};

export default SignupForm;
