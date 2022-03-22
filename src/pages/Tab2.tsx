import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonAvatar, IonImg, IonLabel, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import React, {useState} from 'react';
import axios from 'axios';
import './Tab2.css';
import Card from '../components/Card'


type Friend = {
  name: string;
  height: string;
  mass: string;
}

const Tab2: React.FC = () => {

  //creating list to be held in state
  const [listItems, setListItems] = useState<any>([])

  // function that communicates with the server
  const sendRequest = () => {
    return axios
      .get('https://swapi.dev/api/people',{
      headers:{
        'Content-Type': 'application/json'
      },
      })
      .then((response) => {
      return response.data;
      })
  };

  // Use effect to run function

  React.useEffect(() => {
    sendRequest().then(data => {
      setListItems(data.results)
    });
  }, []);

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
        {listItems?.map((Friend: Friend, index: number) => (
          <Card
            key={index}
            title={Friend.name}
            content={Friend.height}
            subtitle={Friend.mass}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
