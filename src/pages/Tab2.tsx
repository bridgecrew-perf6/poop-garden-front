import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
// import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
// import axios from 'axios';
import './Tab2.scss';
// import Card from '../components/Card'
// import Charty from '../components/Charty/charty';
import { useAuth0 } from "@auth0/auth0-react";
// import LoginButton from '../components/Login/LoginButton'
// import LogoutButton from '../components/Login/LogoutButton'
import Landing from '../components/Landing'
import Home from '../components/Home/home'
import { MyStore } from '../store'


// type Friend = {
//   name: string;
//   height: string;
//   mass: string;
// }

const Tab2: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const userEmail = user?.email;
  const userName = MyStore.useState(s => s.userName);
  
  MyStore.update(s => {
    s.userEmail = user?.email;
  })
  const userEmail = MyStore.useState(s => s.userEmail);
  
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  // console.log(user);

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{ userName || userEmail }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
      {isAuthenticated ?
        <div>
          <Home />
        </div>:
        <div>
          <Landing />
        </div>
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
