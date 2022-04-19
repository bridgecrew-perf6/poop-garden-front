import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonAvatar,
  IonBadge,
} from "@ionic/react";
import { FriendStore } from "../../store";
import { UserStore } from "../../store";
import { useStoreState } from "pullstate";
import { getUserInfo, getFriends } from "../../store/Selectors";

import useResourceFriends from "../../hooks/useResourceFriends";

const FriendsList: React.FC = () => {
  const friends = useStoreState(FriendStore, getFriends);
  const userInfo = useStoreState(UserStore, getUserInfo);

  const { resourcesFriends } = useResourceFriends();

  

  const hasPoopProfile = (poopInfo: any) => {
    if (poopInfo) {
      return ["poop info", "success"];
    } else {
      return ["no poop info", "danger"];
    }
  };

  return (
    <>
      {(resourcesFriends) && (resourcesFriends.length > 0) ? (
        <IonList>
          {
            // eslint-disable-next-line array-callback-return
            friends.map((friend: any, index: React.Key | null | undefined) => {
              // taking user out so that they are not on their own friendsList
              if (friend.username !== userInfo.username) {
                return (
                  <IonItem key={index}>
                    <IonAvatar>
                      <img
                        src={`https://avatars.dicebear.com/api/bottts/${friend.id}${friend.poopInfo}.svg?colorful=true`}
                        alt={"little robot avatar for each person"}
                      />
                    </IonAvatar>
                    <IonLabel>
                      <h1>{friend.username}</h1>
                      <h3>{friend.email}</h3>
                      {/* <p>{friend.poopInfo}</p> */}
                      <IonBadge color={hasPoopProfile(friend.poopInfo)[1]}>
                        {hasPoopProfile(friend.poopInfo)[0]}
                      </IonBadge>
                    </IonLabel>
                    <IonButton fill="outline" slot="end" color="medium">
                      View
                    </IonButton>
                  </IonItem>
                );
              }
            })
          }
        </IonList>
      ) : (
        <h1 className="ion-text-center">
          Looks like you need some bathroom buddies!
        </h1>
      )}
    </>
  );
};

export default FriendsList;
