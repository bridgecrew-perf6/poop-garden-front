import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
import React, { useState, useEffect } from 'react';
import './Tab2.scss';
// import Card from '../components/Card'
// import Charty from '../components/Charty/charty';
import { useAuth } from '../contexts/auth.js';

// import Landing from '../components/Landing'
// import Home from '../components/Home/home'
// import { MyStore } from '../store'
// import axios from 'axios';
import useResourcePoop from '../hooks/useResourcePoop'
import useResourceFriends from '../hooks/useResourceFriends';



const Tab2: React.FC = () => {
  // const { user, login, logout } = useAuth();
  // const userName = MyStore.useState(s => s.userName);
  // const friendsPoop = MyStore.useState(s => s.friendsPoop)
  // const allPoop = MyStore.useState(s => s.allPoop)
  // const userPoopInfo = MyStore.useState(s => s.userPoopInfo);
  // const userFriends:any = MyStore.useState(s => s.userFriends);
  // const PoopProfileInfo = MyStore.useState(s => s.PoopProfileInfo);

  

  // const { resourcesFriends } = useResourceFriends();

  // console.log(resourcesFriends)

  
  return (
    
    <IonPage>
    {/* //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle>{ userName }</IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent fullscreen>
    //   {userName || 'Loading...'}
    //   </IonContent> */}
     </IonPage>
  );
};


export default Tab2;
