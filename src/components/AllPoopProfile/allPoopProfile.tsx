import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  // IonIcon
} from "@ionic/react";
import { PoopStore } from "../../store";
import { getPoopProfiles } from "../../store/Selectors";
import { useStoreState } from "pullstate";
import React, { useEffect, useState } from "react";

// import { useAuth } from '../../contexts/auth.js';

const PoopProfile: React.FC = () => {
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);

  const [totalPoop, setTotalPoop] = useState<number>(0);

  useEffect(() => {
    for (let i = 0; i < poopProfiles.length; i++) {
      let profile = poopProfiles[i];
      let poop = parseInt(profile.poopInfo);
      console.log(poop);
      setTotalPoop((currCount) => currCount + poop);
    }
  }, [poopProfiles]);

  console.log(totalPoop);
  // console.log(poopProfiles)

  return (
    <div>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>PoopProfile</IonCardSubtitle>
          <IonCardTitle>All Together now!</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          This app has counted alot of poop! {totalPoop} pounds total to be
          exact!
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default PoopProfile;
