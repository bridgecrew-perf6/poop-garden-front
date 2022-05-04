import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonAvatar,
  IonBadge,
  IonContent,
  IonRefresher,
  IonRefresherContent,
} from "@ionic/react";
import { RefresherEventDetail } from "@ionic/core";
import { FriendStore } from "../../store";
import { PoopStore } from "../../store";
import { UserStore } from "../../store";
import { useStoreState } from "pullstate";
import {
  getUserInfo,
  getFriends,
  getPoopProfiles,
} from "../../store/Selectors";
import useResourceFriends from "../../hooks/useResourceFriends";
import React, { useState } from "react";
import FriendCard from "../FriendCard/friendCard";

const FriendsList: React.FC = () => {
  //global state variables
  const friends = useStoreState(FriendStore, getFriends);
  const userInfo = useStoreState(UserStore, getUserInfo);
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);
  ///useResource Hooks
  const { resourcesFriends } = useResourceFriends();
  //Local State Variables
  const [openFriendModal, setOpenFriendModal] = useState<boolean>(false);
  const [chosenFriendPoop, setChosenFriendPoop] = useState<number>(0);
  const [chosenFriendName, setChosenFriendName] = useState<string>("");

  //function for pulldown refresh
  function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log("Begin async operation");

    setTimeout(() => {
      FriendStore.update((s) => {
        s.friends = resourcesFriends;
      });
      event.detail.complete();
    }, 2000);
  }

  //checks whether or not friend has a poop profile for the badges
  const hasPoopProfile = (friend: any) => {
    let poopProfileUsers: any[] = [];
    let friendId: any = friend.id;

    for (let i = 0; i < poopProfiles.length; i++) {
      let user = poopProfiles[i].user;
      poopProfileUsers.push(user);
    }

    if (poopProfileUsers.includes(friendId)) {
      return ["poop info", "success"];
    } else {
      return ["no poop info", "danger"];
    }
  };

  const openModal = (friend: any) => {
    let friendId: any = friend.id;

    for (let i = 0; i < poopProfiles.length; i++) {
      let user = poopProfiles[i].user;
      if (user === friendId) {
        setChosenFriendPoop(poopProfiles[i].poopInfo);
        setChosenFriendName(friend.username);
      }
    }
    setOpenFriendModal(true);
  };

  return (
    <IonContent>
      {friends && friends.length > 0 ? (
        <>
          <IonRefresher
            slot="fixed"
            onIonRefresh={doRefresh}
            pullFactor={0.5}
            pullMin={100}
            pullMax={200}
          >
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>
          <IonList>
            {friends.map(
              // eslint-disable-next-line array-callback-return
              (friend: any, index: React.Key | null | undefined) => {
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
                        {/*currently only showing username. can show more */}
                        {/* <h3>{friend.email}</h3> */}
                        {/* <p>{friend.poopInfo}</p> */}
                        <IonBadge color={hasPoopProfile(friend)[1]}>
                          {hasPoopProfile(friend)[0]}
                        </IonBadge>
                      </IonLabel>
                      {hasPoopProfile(friend)[0] === "poop info" ? (
                        <IonButton
                          fill="outline"
                          slot="end"
                          color="medium"
                          onClick={() => openModal(friend)}
                        >
                          View
                        </IonButton>
                      ) : (
                        ""
                      )}
                    </IonItem>
                  );
                }
              }
            )}
          </IonList>
          <FriendCard
            chosenFriendPoop={chosenFriendPoop}
            chosenFriendName={chosenFriendName}
            openFriendModal={openFriendModal}
            setOpenFriendModal={setOpenFriendModal}
          />
        </>
      ) : (
        <h1 className="ion-text-center">
          Looks like you need some bathroom buddies!
        </h1>
      )}
    </IonContent>
  );
};

export default FriendsList;
