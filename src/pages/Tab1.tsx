import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card'
//this one below will go away once i can talk to an api
import people from '../data/data.json'

// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

type Person = {
  name: string;
  height: string;
  mass: string;
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>people</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>people</IonTitle>
          </IonToolbar>
        </IonHeader>
        {people?.map((Person: Person, index: number) => (
          <Card
            key={index}
            title={Person.name}
            content={Person.height}
            subtitle={Person.mass}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
