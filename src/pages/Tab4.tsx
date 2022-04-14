import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Tab1.scss';
// stores and sstore functions
import { UserStore } from '../store';
import { PoopStore } from '../store';
import { FriendStore } from '../store';
import { useStoreState } from 'pullstate';
import { getUserInfo } from '../store/Selectors';
import { useAuth } from '../contexts/auth.js';
//useResource hooks
import useResourcePoop from '../hooks/useResourcePoop'
import useResourceFriends from '../hooks/useResourceFriends';
import LoginForm from '../components/Forms/loginForm'
import SignupForm from '../components/Forms/signupForm'

// This is basically a landing page where the user can sign in. It is also used to grab all of the information that we need from the backend and store it in state.

const Tab4: React.FC = () => {
  // Auth Variables
  const { user, logout } = useAuth();
  // resources hook variables
  const { resourcesPoop } = useResourcePoop();
  const { resourcesFriends } = useResourceFriends();

  const userInfo = useStoreState(UserStore, getUserInfo)
  
  // bringing all of our necessary api information into state and editing when necessary
  useEffect(() => {

    UserStore.update(s => {
      s.userInfo = user
    })
    FriendStore.update(s => {
      s.friends = resourcesFriends;
      // for loop that checks every poop profile and  checks if they are friends. if they are, we take the information we want from their poop profile and add it to their user information
      if (resourcesPoop){
        for (var i = 0; i < resourcesPoop.length; i++) {
          let profile = resourcesPoop[i];
          // addPoopInfo(profile);

          if (s.friends && userInfo){

            if (profile.user === userInfo.id) {
              let stringUserInfo = JSON.parse(JSON.stringify(userInfo));
              s.friends.push(stringUserInfo)
            }

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
    
    PoopStore.update(s => {
      s.poopProfiles = resourcesPoop
    })
  },[resourcesFriends, resourcesPoop, user, userInfo])

  const [segment, setSegment] = useState<any>('signIn');
  let component = null

  switch(segment) {
    case 'signIn':
      component = <LoginForm />
      break
    
    case 'newUser':
      component = <SignupForm />
      break
  }

  // console.log(user)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Sign in Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Sign in Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        {user ?
        // user is logged in- shows log in button
        <IonButton className="ion-margin-top" type="button" strong={true} expand="block" onClick={() => logout()}>
        Log Out
        </IonButton> :
        // user is not logged in
        <div>
        <IonSegment onIonChange={e => setSegment(e.detail.value)} color="warning">
          <IonSegmentButton value="signIn">
            <IonLabel>Sign In</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="newUser">
            <IonLabel>New User</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {component}
        </div>
        }
        <h1 className="ion-text-center">💩Welcome to the Poop Garden!💩</h1>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;