import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  // IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonAvatar,
  IonText,
  IonButton
} from "@ionic/react";
import { ribbonOutline } from "ionicons/icons";
import { FriendStore } from "../../store";
import { getFriends } from "../../store/Selectors";
import { useStoreState } from "pullstate";
import React, { useEffect, useState } from "react";
import PoopSurvey from "./getPoopSurvey"
import { useAuth } from "../../contexts/auth.js";
import "./poopProfile.scss";

const AllPoopProfile: React.FC = () => {
  const { user } = useAuth();

  const friends = useStoreState(FriendStore, getFriends);

  const [userPoop, setUserPoop] = useState();
  const [userId, setUserId] = useState();
  const [showPoopSurvey, setShowPoopSurvey] = useState<boolean>(false);

  console.log(friends);
  console.log(user);

  useEffect(() => {
    if (friends){
      for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
  
        if (friend.id === user.id) {
          setUserPoop(friend.poopInfo);
          setUserId(friend.id);
        }
      }
    }
  }, [friends, user]);

  console.log(userPoop);

  return (
    <>
    {showPoopSurvey ?
    
      <PoopSurvey /> :

      <div>
        <IonCard>
          <IonAvatar className="image-center">
            <img
              src={`https://avatars.dicebear.com/api/bottts/${userId}${userPoop}.svg?colorful=true`}
              alt={"little robot avatar for each person"}
            />
          </IonAvatar>
          <IonCardHeader>
            {/* <IonCardSubtitle>PoopProfile</IonCardSubtitle> */}
            <IonCardTitle className="ion-text-center">
              {user.username}
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            {userPoop ?
              <>
            <IonIcon icon={ribbonOutline} size="large" />
            <IonText>You have expended about {userPoop} pounds of poop so far! What a
            feeling that must be!</IonText>
            </>
            :
            <div>
              <h1 className="ion-text-center">Looks like you haven't filled out your poop profile yet!</h1>
              <IonButton expand="block" onClick={() => setShowPoopSurvey(true)}>Calculate Poop</IonButton>
            </div>
            }
            
          </IonCardContent>
        </IonCard>
      </div>
    }
    </>
  );
};

export default AllPoopProfile;
