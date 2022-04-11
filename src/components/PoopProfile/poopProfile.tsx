import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon
} from "@ionic/react";
import { ribbonOutline } from 'ionicons/icons';
import { FriendStore } from '../../store';
import { getFriends } from '../../store/Selectors';
import { useStoreState } from 'pullstate';
import React, { useEffect, useState } from "react";

import { useAuth } from '../../contexts/auth.js';


const AllPoopProfile: React.FC = () => {
  const { user } = useAuth();

  const friends = useStoreState(FriendStore, getFriends);

  const [userPoop, setUserPoop] = useState()

  console.log(friends)
  console.log(user)

  useEffect(() => {
    for (let i = 0; i < friends.length; i++) {
      let friend = friends[i];
      
      if(friend.id === user.id) {
        setUserPoop(friend.poopInfo)
      }
    }
  }, [friends, user])

  

  console.log(userPoop)
  
  return (
    <div>
      <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>PoopProfile</IonCardSubtitle>
            <IonCardTitle>{user.username}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonIcon icon={ribbonOutline} size="large" />
                  You have expended about {userPoop} pounds of poop so far! What a feeling that must be!
          </IonCardContent>

          
        </IonCard>



    </div>
    
  );
};

export default AllPoopProfile;