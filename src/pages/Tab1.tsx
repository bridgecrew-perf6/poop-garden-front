import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import "./Tab1.scss";
import SkeletonFriends from "../components/SkeletonFriends/skeletonfriends";
import FriendsList from "../components/Friends/friendsList";
import AddFriends from "../components/Friends/addFriends";
import { PoopStore } from "../store";
import { UserStore } from "../store";
import { FriendStore } from "../store";
import { useStoreState } from "pullstate";
import { getFriends, getPoopProfiles, getUserInfo } from "../store/Selectors";

const Tab1: React.FC = () => {
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);
  const friends = useStoreState(FriendStore, getFriends);
  const userInfo = useStoreState(UserStore, getUserInfo);

  const [segment, setSegment] = useState<any>("friendsList");
  let component = null;

  switch (segment) {
    case "friendsList":
      component = <FriendsList />;
      break;

    case "addFriends":
      component = <AddFriends />;
      break;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          {userInfo ? (
            <IonTitle className="ion-text-center">
              {`${userInfo.username}'s` || ""} friends
            </IonTitle>
          ) : (
            ""
          )}
        </IonToolbar>
      </IonHeader>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Your Friends</IonTitle>
        </IonToolbar>
      </IonHeader>
      {friends && poopProfiles && userInfo ? (
        <>
          <IonSegment
            onIonChange={(e) => setSegment(e.detail.value)}
            color="warning"
          >
            <IonSegmentButton value="friendsList">
              <IonLabel>Bathroom Buddies</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="addFriends">
              <IonLabel>Add Buddies</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {component}
        </>
      ) : (
        <SkeletonFriends />
      )}
    </IonPage>
  );
};

export default Tab1;
