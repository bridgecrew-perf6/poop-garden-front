import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  // IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonAvatar,
} from "@ionic/react";
import { ribbonOutline } from 'ionicons/icons';
import { FriendStore } from '../../store';
import { getFriends } from '../../store/Selectors';
import { useStoreState } from 'pullstate';
import React, { useEffect, useState } from "react";

import { useAuth } from '../../contexts/auth.js';
import './poopProfile.scss';


const AllPoopProfile: React.FC = () => {
  const { user } = useAuth();

  const friends = useStoreState(FriendStore, getFriends);

  const [userPoop, setUserPoop] = useState()
  const [userId, setUserId] = useState()

  console.log(friends)
  console.log(user)

  useEffect(() => {
    for (let i = 0; i < friends.length; i++) {
      let friend = friends[i];
      
      if(friend.id === user.id) {
        setUserPoop(friend.poopInfo)
        setUserId(friend.id)
      }
    }
  }, [friends, user])

  

  console.log(userPoop)
  
  return (
    <div>
      <IonCard>
          <IonAvatar className="image-center">
            <img src={`https://avatars.dicebear.com/api/bottts/${userId}${userPoop}.svg?colorful=true`} alt={'little robot avatar for each person'}/>
          </IonAvatar>
          <IonCardHeader>
            {/* <IonCardSubtitle>PoopProfile</IonCardSubtitle> */}
            <IonCardTitle className="ion-text-center">{user.username}</IonCardTitle>
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