import { IonImg, IonText } from "@ionic/react";
import React, { useState, useEffect } from "react";
import { UserStore } from "../../store";
import { PoopStore } from "../../store";
import { getPoopProfiles, getUserInfo } from "../../store/Selectors";
import { useStoreState } from "pullstate";
import { imageObject, weightComparisons } from "../../data/data";

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
    const weights = Object.keys(weightComparisons);

    weights.forEach(key => {
      if (pounds > parseInt(key)) {
        setDuoItem(weightComparisons[key])
      }
    })
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
          <h1 className="ion-text-center">Your poop combined weighs {duoTotal} pounds</h1>
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
