import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
// import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import axios from 'axios';
import './Tab1.css';
import Card from '../components/Card'
//connecting to 'state store
import { MyStore } from '../store'




type Friend = {
  name: string;
  height: string;
  mass: string;
}


const Tab1: React.FC = () => {

  //grabbing userInfo variable from store to be used as state
  const userInfo = MyStore.useState(s => s.userInfo);
  //user info is blank before getting information from the api
  console.log(userInfo)

  // function that communicates with the server
  const sendRequest = () => {
    return axios
      .get('https://swapi.dev/api/people',{
      headers:{
        'Content-Type': 'application/json'
      },
      })
      .then((response) => {
        // console.log(response.data.results);
      return response.data.results;
      })
  };

  // Use effect to run function on load. will reload whenever the variable in the array at the end changes(currently userInfo)
  React.useEffect(() => {
    sendRequest().then(data => {
      MyStore.update(s => {
        s.userInfo = data;
      })
    });
  }, [userInfo]);

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
            content={Friend.height}
            subtitle={Friend.mass}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
