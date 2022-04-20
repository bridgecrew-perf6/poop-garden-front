import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonAvatar,
  IonBadge,
} from "@ionic/react";
import { FriendStore } from "../../store";
import { PoopStore } from "../../store";
import { UserStore } from "../../store";
import { useStoreState } from "pullstate";
import { getUserInfo, getFriends, getPoopProfiles } from "../../store/Selectors";

// import useResourceFriends from "../../hooks/useResourceFriends";

const FriendsList: React.FC = () => {
  const friends = useStoreState(FriendStore, getFriends);
  const userInfo = useStoreState(UserStore, getUserInfo);
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles)

  // const { resourcesFriends } = useResourceFriends();



  const hasPoopProfile = (friend: any) => {
    let poopProfileUsers: any[] = []
    let friendId: any = friend.id

    for (let i = 0; i < poopProfiles.length; i++){
      let user = poopProfiles[i].user;
      poopProfileUsers.push(user)
    }
    
    if (poopProfileUsers.includes(friendId)) {
      return ["poop info", "success"];
    } else {
      return ["no poop info", "danger"];
    }
  };

  // console.log(friends)
  // console.log(poopProfiles)
  // console.log(userInfo)

  return (
    <>
      {(friends) && (friends.length > 0) ? (
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
                      <IonBadge color={hasPoopProfile(friend)[1]}>
                        {hasPoopProfile(friend)[0]}
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
