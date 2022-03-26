import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab3.scss';
// import { UIStore } from '../store'
// import { MyStore } from '../store'
// import LoginButton from '../components/Login/LoginButton'
// import LogoutButton from '../components/Login/LogoutButton'
import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

const Tab3: React.FC = () => {

  // const { user, isAuthenticated, isLoading } = useAuth0();
  // const userEmail = user?.email;

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  // console.log(user);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        tab 3 stuff
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
