// import { IonButton, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar, IonTitle } from '@ionic/react';
import React from "react";
// import LoginButton from '../Login/LoginButton'
import LogoutButton from '../Login/LogoutButton'
import Charty from '../Charty/charty'
// import { useAuth0 } from "@auth0/auth0-react";
// import { MyStore } from '../../store'



const Home: React.FC = () => {
  // variable retrieved from global state
  // const userEmail = MyStore.useState(s => s.userEmail);
  // const userName = MyStore.useState(s => s.userName);

  // const { user, isAuthenticated, isLoading } = useAuth0();

  // MyStore.update(s => {
  //   s.userEmail = user?.email;
  // })
  
  // console.log(userName);

  return (
    <div>
      <LogoutButton />
      <Charty /> 
    </div>
  );
};

export default Home;