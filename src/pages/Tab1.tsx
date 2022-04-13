import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonAvatar, IonBadge } from '@ionic/react';
import React, { useState, useEffect }from 'react';
import './Tab1.scss';
import { useAuth } from '../contexts/auth.js';
// import Cards from '../components/Cards'
import SkeletonFriends from '../components/SkeletonFriends/skeletonfriends'
// import useResourceFriends from '../hooks/useResourceFriends';
import { UserStore } from '../store';
import { PoopStore } from '../store';
import { FriendStore } from '../store';
import { useStoreState } from 'pullstate';
import { getUserInfo, getFriends, getPoopProfiles } from '../store/Selectors';

//This is the page that the user is (currently) sent to right after they sign in. Its main purpose is to show a list of the user's friends

const Tab1: React.FC = () => {

  const [tempFriends, setTempFriends] = useState<any>([])
  const { user } = useAuth();
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles)
  const friends = useStoreState(FriendStore, getFriends)
  const userInfo = useStoreState(UserStore, getUserInfo)
 
  useEffect(() => {
    setTempFriends(friends)
  },[friends])
  // console.log(userInfo)
  // console.log(friends)
  // console.log(poopProfiles);

  const hasPoopProfile = (poopInfo: any) => {
    if (poopInfo){
      return ['poop info', 'success']
    } else {
      return ['no poop info', 'danger']
    }

  }


  return (
    
    <IonPage>
      
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle className="ion-text-center">Your Friends</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {/* <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Your Friends</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        {friends && poopProfiles && tempFriends ?
        <IonList>
          {
            // eslint-disable-next-line array-callback-return
            tempFriends.map((friend: any, index: React.Key | null | undefined) => {

              // taking user out so that they are not on their own friendsList
              if (friend.username !== userInfo.username) {

                return <IonItem key={index}>
                   <IonAvatar>
                    <img src={`https://avatars.dicebear.com/api/bottts/${friend.id}${friend.poopInfo}.svg?colorful=true`} alt={'little robot avatar for each person'}/>
                  </IonAvatar>
                  <IonLabel>
                    <h1>{friend.username}</h1>
                    <h3>{friend.email}</h3>
                    {/* <p>{friend.poopInfo}</p> */}
                    <IonBadge color={hasPoopProfile(friend.poopInfo)[1]}>{hasPoopProfile(friend.poopInfo)[0]}</IonBadge>
                  </IonLabel>
                  <IonButton fill="outline" slot="end" color="medium">View</IonButton>
                </IonItem>
              }
            })
          }
        </IonList>:
         <SkeletonFriends />}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
