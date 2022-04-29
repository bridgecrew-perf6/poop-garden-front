import React, { useState, useEffect } from "react";
import { IonList, IonItem, IonImg, IonLabel, IonText } from "@ionic/react";
import { PoopStore } from "../../store";
import { UserStore } from "../../store";
import { getUserInfo, getPoopProfiles } from "../../store/Selectors";
import { useStoreState } from "pullstate";
import { vehicles } from "../../data/data"

const UhaulComp: React.FC = () => {
  const userInfo = useStoreState(UserStore, getUserInfo);
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);
  const [trucksNeeded, setTrucksNeeded] = useState<any>();
  const [leftOver, setLeftOver] = useState<any>();

  const getTruck = async () => {
    let totalTrucks: any = [];
    let goal: any;
    for (let i = 0; i < poopProfiles.length; i++) {
      let user = poopProfiles[i].user;
      let poopInfo = poopProfiles[i].poopInfo;
      if (user === userInfo.id) {
        goal = poopInfo;
      }
    }
    while (goal > 9600) {
      totalTrucks.push("Uhaul 26ft Moving Truck");
      goal -= 9600;
    }
    while (goal > 6385) {
      totalTrucks.push("Uhaul 15 Foot Truck");
      goal -= 6385;
    }
    while (goal > 4000) {
      totalTrucks.push("Uhaul Cargo Van");
      goal -= 4000;
    }
    while (goal > 2810) {
      totalTrucks.push("Uhaul 10 Foot Truck");
      goal -= 2810;
    }
    while (goal > 1980) {
      totalTrucks.push("Uhaul Pickup Truck");
      goal -= 1980;
    }
    while (goal > 1100) {
      totalTrucks.push("Standard Shopping Cart");
      goal -= 1100;
    }
    setTrucksNeeded(totalTrucks);
    setLeftOver(goal);
  };

  useEffect(() => {
    if (poopProfiles && userInfo) {
      getTruck();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [poopProfiles, userInfo]);

  // console.log(trucksNeeded);
  // console.log(leftOver);

  return (
    <>
      {trucksNeeded && leftOver ? (
        <>
          <IonText color="tertiary">
            <h3>
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
