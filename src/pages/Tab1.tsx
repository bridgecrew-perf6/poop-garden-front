import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import React, { useState }from 'react';
import './Tab1.scss';
// import { useAuth } from '../contexts/auth.js';
// import Cards from '../components/Cards'
import SkeletonFriends from '../components/SkeletonFriends/skeletonfriends'
import FriendsList from '../components/Friends/friendsList'
import AddFriends from '../components/Friends/addFriends'
// import useResourceFriends from '../hooks/useResourceFriends';
// import { UserStore } from '../store';
import { PoopStore } from '../store';
import { FriendStore } from '../store';
import { useStoreState } from 'pullstate';
import { getFriends, getPoopProfiles } from '../store/Selectors';

//This is the page that the user is (currently) sent to right after they sign in. Its main purpose is to show a list of the user's friends

const Tab1: React.FC = () => {


  // const { user } = useAuth();
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles)
  const friends = useStoreState(FriendStore, getFriends)

  const [segment, setSegment] = useState<any>('friendsList');
  let component = null

  switch(segment) {
    case 'friendsList':
      component = <FriendsList />
      break
    
    case 'addFriends':
      component = <AddFriends />
      break
  }

  return (
    
    <IonPage>
      
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle className="ion-text-center">Friends</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {/* <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Your Friends</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {friends && poopProfiles ?
        <>
        <IonSegment onIonChange={e => setSegment(e.detail.value)} color="warning">
          <IonSegmentButton value="friendsList">
            <IonLabel>Bathroom Buddies</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="addFriends">
            <IonLabel>Add Buddies</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {component}
        </>
        :

        <SkeletonFriends />}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
