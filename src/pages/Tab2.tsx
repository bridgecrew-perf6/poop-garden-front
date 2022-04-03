import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
import React, { useState } from 'react';
import './Tab2.scss';
// import Card from '../components/Card'
// import Charty from '../components/Charty/charty';
import { useAuth } from '../contexts/auth.js';

// import Landing from '../components/Landing'
// import Home from '../components/Home/home'
import { MyStore } from '../store'
// import axios from 'axios';
import useResource from '../hooks/useResource'



const Tab2: React.FC = () => {
  const { user, login, logout } = useAuth();
  const userName = MyStore.useState(s => s.userName);
  const userPoopInfo = MyStore.useState(s => s.userPoopInfo);
  // const userId = MyStore.useState(s => s.userId);
  // const userPassword = MyStore.useState(s => s.userPassword);
  const PoopProfileInfo = MyStore.useState(s => s.PoopProfileInfo);

  // useResource Variables to interact with my API
  const { resources, loading, createResource, deleteResource } = useResource();

  // function that runs befor component renders and grabs current user's poop profile information
  React.useEffect(() => {

    if (loading) {
      console.log('loading...')
    } else if (resources) {
  
      for (let i=0; i<resources.length; i++) {
            if (resources[i].user === user.id){
              MyStore.update(s => {
                s.userEmail = resources[i].email;
                s.userId = resources[i].id;
                s.PoopProfileInfo = resources[i]
                s.userPoopInfo = resources[i].poopInfo;
              })
            }
          }
  
      console.log(resources)
    }
  },);
  console.log(PoopProfileInfo)
  

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{ userName }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {userPoopInfo || 'Loading...'}
      </IonContent>
    </IonPage>
  );
};


export default Tab2;
