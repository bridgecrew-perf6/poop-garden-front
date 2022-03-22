import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonAvatar, IonImg, IonLabel, IonList } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import React, {useState} from 'react';
// import axios from 'axios';
import './Tab2.css';
// import Card from '../components/Card'
import Chart from '../components/Charty';


// type Friend = {
//   name: string;
//   height: string;
//   mass: string;
// }

const Tab2: React.FC = () => {

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Poop Statistics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Poop Statistics</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Chart />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
