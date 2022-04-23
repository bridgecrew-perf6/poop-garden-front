import {
  IonItem,
  IonButton,
  IonInput,
  useIonRouter,
  IonLabel,
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
// import { useAuth } from '../../contexts/auth.js';
import useResourceUsers from "../../hooks/useResourceUsers";
// import { UserStore } from '../../store';
// import { useStoreState } from 'pullstate';
// import { getUserInfo } from '../../store/Selectors';

const SignupForm: React.FC = () => {
  const [tempName, setTempName] = useState<string>();
  const [tempPassword, setTempPassword] = useState<any>();
  const [tempEmail, setTempEmail] = useState<any>();
  const [showToast, setShowToast] = useState(false);
  const router = useIonRouter();
  // const { user, login, logout } = useAuth();
  const { createResourceUsers } = useResourceUsers();
  // const userInfo = useStoreState(UserStore, getUserInfo)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    createResourceUsers({
      username: tempName,
      email: tempEmail,
      password: tempPassword,
    }).then(() => {
      router.push("/tab1");
    }).catch(() => {
      setShowToast(true);
    })
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
        <IonInput onIonChange={(e) => setTempName(e.detail.value!)}></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput
          onIonChange={(e) => setTempPassword(e.detail.value!)}
        ></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput onIonChange={(e) => setTempEmail(e.detail.value!)}></IonInput>
      </IonItem>

      <IonButton className="ion-margin-top" type="submit" expand="block">
        Sign Up
      </IonButton>
    </form>
    </>
  );
};

export default SignupForm;
