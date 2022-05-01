import React, { useState, useEffect } from "react";
import { IonImg, IonText } from "@ionic/react";
import { PoopStore } from "../../store";
import { UserStore } from "../../store";
import { getUserInfo, getPoopProfiles } from "../../store/Selectors";
import { useStoreState } from "pullstate";
import { imageObject, weightComparisons } from "../../data/data";

const WeightComp: React.FC = () => {
  const userInfo = useStoreState(UserStore, getUserInfo);
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);

  const [item, setItem] = useState<any>();

  //uses dataObjects to figure out what array of trucks to display
  const getItem = (pounds: number) => {
    const weights = Object.keys(weightComparisons);

    weights.forEach((key) => {
      if (pounds > parseInt(key)) {
        setItem(weightComparisons[key]);
      }
    });
  };

  useEffect(() => {
    if (poopProfiles && userInfo) {
      for (let i = 0; i < poopProfiles.length; i++) {
        let user = poopProfiles[i].user;
        if (user === userInfo.id) {
          let poopInfo = poopProfiles[i].poopInfo;
          getItem(poopInfo);
        }
      }
    }
  }, [poopProfiles, userInfo]);

  return (
    <>
      {item ? (
        <>
          <IonText color="tertiary">
            <h3 className="ion-text-center">
              {`Your poop also weighs a bit more than ${item}!`}
            </h3>
          </IonText>

          <IonImg src={imageObject[item]} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default WeightComp;
