import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
// import ExploreContainer from '../components/ExploreContainer';
import React, { useState, useEffect }from 'react';
import './Tab1.scss';
import Cards from '../components/Cards'
//connecting to 'state store
// import { MyStore } from '../store'
import useResourceFriends from '../hooks/useResourceFriends';
import { UserStore } from '../store';
import { PoopStore } from '../store';
import { FriendStore } from '../store';



const Tab1: React.FC = () => {

  //grabbing userInfo variable from store to be used as state
  // const userFriends = MyStore.useState(s => s.userFriends);

  // const { resourcesFriends } = useResourceFriends();
  const userInfo = UserStore.useState(s => s.userInfo);
  const poopProfiles = PoopStore.useState(s => s.poopProfiles)
  const friends = FriendStore.useState(s => s.friends)
  
  
  // useEffect(() => {

  //   const fetchFriends = async () => {
  //     FriendStore.update(s => {
  //       s.friends = resourcesFriends;
  //     })
  //   }
      
  //   fetchFriends()
  //   .catch(console.error)    
  // },[resourcesFriends]);

  console.log(userInfo)
  console.log(friends)
  console.log(poopProfiles);

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
        {/* {user ? <Cards />: 'Loading...'} */}
        {friends ? `Hello ${userInfo.username}!!`: 'Loading...'}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
