import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillLeave, IonItem, IonButton, IonInput, useIonRouter } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './Tab1.scss';
// stores and sstore functions
import { UserStore } from '../store';
import { PoopStore } from '../store';
import { FriendStore } from '../store';
// import { addPoopInfo } from '../store/FriendStore'
//useAuth hook
import { useAuth } from '../contexts/auth.js';
//useResource hooks
import useResourcePoop from '../hooks/useResourcePoop'
import useResourceFriends from '../hooks/useResourceFriends';

// This is basically a landing page where the user can sign in. It is also used to grab all of the information that we need from the backend and store it in state.

const Tab4: React.FC = () => {
  // Auth Variables
  const { user, login, logout } = useAuth();
  // resources hook variables
  const { resourcesPoop } = useResourcePoop();
  const { resourcesFriends } = useResourceFriends();
  
  // local state variables
  const [tempName, setTempName] = useState<string>()
  const [tempPassword, setTempPassword] = useState<any>()
  //declaring a variable for the Ion router
  const router = useIonRouter()
  // what happens when the button is pushed? log in to api and go to next page
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    login(tempName, tempPassword)
    router.push('/tab1')
  }
  // bringing all of our necessary api information into state and editing when necessary
  useEffect(() => {
    FriendStore.update(s => {
      s.friends = resourcesFriends;
      // for loop that checks every poop profile and  checks if they are friends. if they are, we take the information we want from their poop profile and add it to their user information
      if (resourcesPoop){
        for (let i = 0; i < resourcesPoop.length; i++) {
          let profile = resourcesPoop[i];
          // addPoopInfo(profile);
          if (s.friends){
            for (let i=0; i<s.friends.length; i++){
              let friend = s.friends[i];
              if(friend.id === profile.user){
                friend.poopInfo = profile.poopInfo
              }
            }
          }
          
        }
      }
    })
    UserStore.update(s => {
      s.userInfo = user
    })
    PoopStore.update(s => {
      s.poopProfiles = resourcesPoop
    })
  },[resourcesFriends, resourcesPoop, user])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign in Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Sign in Page</IonTitle>
          </IonToolbar>
        </IonHeader>

        <form onSubmit={(e) => {handleSubmit(e)}
        }>
          <IonItem>
            <IonInput  placeholder="Enter Name" onIonChange={e => setTempName(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonInput  placeholder="Enter Password" onIonChange={e => setTempPassword(e.detail.value!)}></IonInput>
          </IonItem>

          <IonButton className="ion-margin-top" type="submit" expand="block">
            Log In
          </IonButton>
        </form>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;