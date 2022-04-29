import { IonImg } from "@ionic/react";
import React, { useState, useEffect } from "react";
import { weightComparisons, imageObject } from "../../data/data";
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

  useEffect(() => {
    if (userInfo && poopProfiles && chosenFriendPoop) {
      for (let i = 0; i < poopProfiles.length; i++) {
        let user = poopProfiles[i].user;
        if (user === userInfo.id) {
          let poopInfo = poopProfiles[i].poopInfo;
          // let name = poopProfiles[i].nickname;
          setDuoTotal(chosenFriendPoop + poopInfo);
        }
      }
    }
  }, [userInfo, poopProfiles, chosenFriendPoop]);

  return (
    <div>
      {duoTotal ? (
        <>
          <h1>{duoTotal}</h1>
          <IonImg src={"assets/img/rhino.jpeg"} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default UserPlusFriendWeight;
