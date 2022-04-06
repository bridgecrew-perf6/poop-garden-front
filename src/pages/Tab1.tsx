import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect }from 'react';
import './Tab1.scss';
import Cards from '../components/Cards'
import { Person } from '../components/Person/person.js'

import useResourceFriends from '../hooks/useResourceFriends';
import { UserStore } from '../store';
import { PoopStore } from '../store';
import { FriendStore } from '../store';
import { useStoreState } from 'pullstate';
import { getUserInfo, getFriends, getPoopProfiles } from '../store/Selectors';

//This is the page that the user is (currently) sent to right after they sign in. Its main purpose is to show a list of the user's friends

const Tab1: React.FC = () => {

  //useStoreState hook for pulling out the data or a subset of the data from state
  const userInfo = useStoreState(UserStore, getUserInfo)
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles)
  const friends = useStoreState(FriendStore, getFriends)
 

  console.log(userInfo)
  console.log(friends)
  console.log(poopProfiles);

  // I need to iterate over this list of friends and show the list

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
