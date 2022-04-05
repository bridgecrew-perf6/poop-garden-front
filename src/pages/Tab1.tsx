import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
// import ExploreContainer from '../components/ExploreContainer';
import React, { useState, useEffect }from 'react';
import './Tab1.scss';
import Cards from '../components/Cards'
//connecting to 'state store
import { MyStore } from '../store'
import useResourceFriends from '../hooks/useResourceFriends';



const Tab1: React.FC = () => {

  //grabbing userInfo variable from store to be used as state
  const userFriends = MyStore.useState(s => s.userFriends);

  const { resourcesFriends } = useResourceFriends();
  
 
  useEffect(() => {

    const fetchFriends = async () => {
      MyStore.update(s => {
        s.userFriends = resourcesFriends;
      })
    }
      
    fetchFriends()
    .catch(console.error)    
  },[resourcesFriends]);

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Friends</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Friends</IonTitle>
          </IonToolbar>
        </IonHeader>
        {userFriends ? <Cards />: 'Loading...'}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
