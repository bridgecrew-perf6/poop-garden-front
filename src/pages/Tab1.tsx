import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
// import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import './Tab1.scss';
import Card from '../components/Card'
//connecting to 'state store
import { MyStore } from '../store'
import axios from 'axios';

type Friend = {
  name: string;
  email: string;
  poopInfo: number;
}

const Tab1: React.FC = () => {

  //grabbing userInfo variable from store to be used as state
  // const userInfo = MyStore.useState(s => s.userInfo);
  const userFriends = MyStore.useState(s => s.userFriends);


  const getFriendsRequest = () => {
    return axios
      .get('https://poop-garden-back.herokuapp.com/api/v1/pooper/',{
      // .get('http://127.0.0.1:8000/api/v1/pooper/',{
      headers:{
        'Content-Type': 'application/json'
      },
      })
      .then((response) => {
        // console.log(response.data);
      return response.data;
      })
  };
  

  // Use effect to run function on load. will reload whenever the variable in the array at the end changes(currently userInfo)
  React.useEffect(() => {
    getFriendsRequest().then(data => {
      MyStore.update(s => {
        s.userFriends = data;
      })
    });
  },);



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
        {userFriends.map((Friend: Friend, index: number) => (
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
