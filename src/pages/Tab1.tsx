import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
// import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import './Tab1.css';
import Card from '../components/Card'
//connecting to 'state store
import { MyStore } from '../store'

type Friend = {
  name: string;
  email: string;
  poopInfo: number;
}

const Tab1: React.FC = () => {

  //grabbing userInfo variable from store to be used as state
  const userInfo = MyStore.useState(s => s.userInfo);
  console.log(userInfo)

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
        {userInfo.map((Friend: Friend, index: number) => (
          <Card
            key={index}
            title={Friend.name}
            content={Friend.poopInfo}
            subtitle={Friend.email}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
