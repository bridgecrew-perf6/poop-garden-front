import {
  IonPage,
  IonContent,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import "./Tab2.scss";
import FriendsBarChart from "../components/Charts/friendsBarChart";
import FriendsPieChart from "../components/Charts/friendsPieChart";
import PoopProfile from "../components/PoopProfile/poopProfile";
import AllPoopProfile from "../components/AllPoopProfile/allPoopProfile";
import SkeletonFriends from "../components/SkeletonFriends/skeletonfriends";

import { UserStore } from "../store";
import { useStoreState } from "pullstate";
import { getUserInfo } from "../store/Selectors";

const Tab2: React.FC = () => {
  const userInfo = useStoreState(UserStore, getUserInfo);

  const [segment, setSegment] = useState<any>("user");
  let chart1 = null;
  let chart2 = null;

  switch (segment) {
    case "friends":
      chart1 = <FriendsBarChart />;
      chart2 = <FriendsPieChart />;
      break;

    case "user":
      chart1 = <PoopProfile />;
      break;

    case "all":
      chart1 = <AllPoopProfile />;
      break;
  }

  return (
    <IonPage>
      {userInfo ? (
        <>
          <IonHeader>
            <IonToolbar color="secondary">
              <IonTitle className="ion-text-center">
                {`${userInfo.username}'s` || ""} poop statistics
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonSegment
              onIonChange={(e) => setSegment(e.detail.value)}
              color="warning"
            >
              <IonSegmentButton value="user">
                <IonLabel>My Poop Profile</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="friends">
                <IonLabel>Friendly Poop</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="all">
                <IonLabel>The whole pile</IonLabel>
              </IonSegmentButton>
            </IonSegment>

            {userInfo ? (
              <div>
                {chart1}
                {chart2}
              </div>
            ) : (
              <h1 className="ion-text-center">💩Please Log in💩</h1>
            )}
          </IonContent>
        </>
      ) : (
        <SkeletonFriends />
      )}
    </IonPage>
  );
};

export default Tab2;
