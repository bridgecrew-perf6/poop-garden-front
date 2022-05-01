import React, { useState, useEffect } from "react";
import { IonList, IonItem, IonImg, IonLabel, IonText } from "@ionic/react";
import { PoopStore } from "../../store";
import { UserStore } from "../../store";
import { getUserInfo, getPoopProfiles } from "../../store/Selectors";
import { useStoreState } from "pullstate";
import { vehicles, weightCapacities } from "../../data/data";

const UhaulComp: React.FC = () => {
  const userInfo = useStoreState(UserStore, getUserInfo);
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);
  const [trucksNeeded, setTrucksNeeded] = useState<any>();
  const [leftOver, setLeftOver] = useState<any>();

  //uses dataObjects to figure out what array of trucks to display
  const getTruck = () => {
    let totalTrucks: any = [];
    let goal: any;
    for (let i = 0; i < poopProfiles.length; i++) {
      let user = poopProfiles[i].user;
      let poopInfo = poopProfiles[i].poopInfo;
      if (user === userInfo.id) {
        goal = poopInfo;
      }
    }

    const weights = Object.keys(weightCapacities).reverse();

    weights.forEach((key) => {
      while (goal > parseInt(key)) {
        totalTrucks.push(weightCapacities[key]);
        goal -= parseInt(key);
      }
    });

    setTrucksNeeded(totalTrucks);
    setLeftOver(goal);
  };

  useEffect(() => {
    if (poopProfiles && userInfo) {
      getTruck();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poopProfiles, userInfo]);

  return (
    <>
      {trucksNeeded && leftOver ? (
        <>
          <IonText color="tertiary">
            <h3 className="ion-text-center">
              {`If you filled all of these to their maximum weight capacity, you would still have ${leftOver} pounds of crap left over!`}
            </h3>
          </IonText>

          <IonList>
            {trucksNeeded.map((truck: any, index: number) => (
              <IonItem key={index}>
                <IonImg src={vehicles[truck]} alt={`picture of ${truck}`} />
                <IonLabel>{truck}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default UhaulComp;
