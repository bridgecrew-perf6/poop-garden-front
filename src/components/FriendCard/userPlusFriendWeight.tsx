import { IonImg, IonText } from "@ionic/react";
import React, { useState, useEffect } from "react";
import { imageObject } from "../../data/data";
import { UserStore } from "../../store";
import { PoopStore } from "../../store";
import { getPoopProfiles, getUserInfo } from "../../store/Selectors";
import { useStoreState } from "pullstate";

interface FriendProps {
  chosenFriendPoop: number;
}

const UserPlusFriendWeight: React.FC<FriendProps> = ({
  chosenFriendPoop,
}: FriendProps) => {
  const userInfo = useStoreState(UserStore, getUserInfo);
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);

  const [duoTotal, setDuoTotal] = useState<number>();
  const [duoItem, setDuoItem] = useState<any>();

  const getItem = (pounds: number) => {
    if (pounds > 220000){
      setDuoItem("the weight of a space shuttle")
    } else if (pounds > 100000){
      setDuoItem("the weight of 2 Stonehenge Sarsen stones")
    } else if (pounds > 82000){
      setDuoItem("the weight of a NYC subway car")
    } else if (pounds > 63000){
      setDuoItem("the weight of a railroad boxcar")
    } else if (pounds > 50000){
      setDuoItem("the weight of a fully loaded garbage truck")
    } else if (pounds > 45000){
      setDuoItem("the weight of an F-15 jet fighter")
    } else if (pounds > 40000){
      setDuoItem("the weight of a greyhound bus")
    } else if (pounds > 35000){
      setDuoItem("the weight of a seme truck with an empty trailer")
    } else if (pounds > 27000){
      setDuoItem("the weight of the Hubble Space Telescope")
    } else if (pounds > 19400){
      setDuoItem("the estimated weight of Tyrannosaurus Rex")
    } else if (pounds > 16000){
      setDuoItem("the weight of a school bus")
    } else if (pounds > 13000){
      setDuoItem("the weight of an African Bush Elephant")
    } else if (pounds > 8400){
      setDuoItem("the weight of a hippo")
    } else if (pounds > 6000){
      setDuoItem("the weight of the charging bull")
    } else if (pounds > 4600){
      setDuoItem("the weight of a Rhinoceros")
    } 
  }

  useEffect(() => {
    if (userInfo && poopProfiles && chosenFriendPoop) {
      for (let i = 0; i < poopProfiles.length; i++) {
        let user = poopProfiles[i].user;
        if (user === userInfo.id) {
          let poopInfo = poopProfiles[i].poopInfo;
          // let name = poopProfiles[i].nickname;
          getItem(chosenFriendPoop + poopInfo);
          setDuoTotal(chosenFriendPoop + poopInfo);
        }
      }
    }
  }, [userInfo, poopProfiles, chosenFriendPoop]);

  return (
    <div>
      {duoTotal && duoItem ? (
        <>
          <IonText>
          <h1 className="ion-text-center">Your poop combined weighs {duoTotal}</h1>
          <p className="ion-text-center">That is more than {duoItem}</p>

          </IonText>
          <IonImg src={imageObject[duoItem]} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserPlusFriendWeight;
