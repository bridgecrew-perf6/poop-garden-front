import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonAvatar,
  IonText,
  IonButton,
  useIonViewWillLeave,
} from "@ionic/react";
import { ribbonOutline } from "ionicons/icons";
import { PoopStore } from "../../store";
import { UserStore } from "../../store";
import {
  getUserInfo,
  // getFriends,
  getPoopProfiles,
} from "../../store/Selectors";
import { useStoreState } from "pullstate";
import React, { useState, useEffect } from "react";
import PoopSurvey from "./getPoopSurvey";
import UhaulComp from "./uhaulcomp"
import "./poopProfile.scss";

const AllPoopProfile: React.FC = () => {

  const userInfo = useStoreState(UserStore, getUserInfo);
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);
  const [showPoopSurvey, setShowPoopSurvey] = useState<boolean>(false);

  const checkForUserPoop = (id: any) => {
    for (let i = 0; i < poopProfiles.length; i++) {
      let user = poopProfiles[i].user;
      let poopInfo = poopProfiles[i].poopInfo;
      if (user === id) {
        // console.log(poopInfo);
        return poopInfo;
      }
    }

    return null;
  };

  useEffect(() => {
    setShowPoopSurvey(false)
  },[userInfo]);

  useIonViewWillLeave(() => {
    setShowPoopSurvey(false);
  });

  // console.log(userPoop);

  return (
    <>
      {userInfo && poopProfiles && (showPoopSurvey===false) ? (
        <div>
          <IonCard color="light">
            <IonAvatar className="image-center">
              <img
                src={`https://avatars.dicebear.com/api/bottts/${userInfo.id}.svg?colorful=true`}
                alt={"little robot avatar for each person"}
              />
            </IonAvatar>
            <IonCardHeader>
              {/* <IonCardSubtitle>PoopProfile</IonCardSubtitle> */}
              <IonCardTitle className="ion-text-center">
                {userInfo.username}
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              {checkForUserPoop(userInfo.id) ? (
                <>
                  <IonIcon icon={ribbonOutline} size="large" />
                  <IonText>
                    You have expended about {checkForUserPoop(userInfo.id)}{" "}
                    pounds of poop so far! What a feeling that must be!
                  </IonText>
                </>
              ) : (
                <div>
                  <h1 className="ion-text-center">
                    Looks like you haven't filled out your poop profile yet!
                  </h1>
                  <IonButton
                    expand="block"
                    onClick={() => setShowPoopSurvey(true)}
                  >
                    Calculate Poop
                  </IonButton>
                </div>
              )}
            </IonCardContent>
          </IonCard>
          {checkForUserPoop(userInfo.id) ? <UhaulComp /> : ""}
        </div>
      ) : (
        ""
      )}
      {showPoopSurvey ? <PoopSurvey /> : ""}
    </>
  );
};

export default AllPoopProfile;
