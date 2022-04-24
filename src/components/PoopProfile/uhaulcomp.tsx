import React, { useState, useEffect } from 'react';
import { IonList,
  IonItem,
  // IonThumbnail,
  IonImg,
  IonLabel,
  IonText
} from '@ionic/react';
import { PoopStore } from "../../store";
import { UserStore } from "../../store";
import {
  getUserInfo,
  getPoopProfiles,
} from "../../store/Selectors";
import { useStoreState } from "pullstate";



const UhaulComp: React.FC = () => {

  const userInfo = useStoreState(UserStore, getUserInfo);
  const poopProfiles = useStoreState(PoopStore, getPoopProfiles);
  // const [userPoop, setUserPoop] = useState<any>()
  const [trucksNeeded, setTrucksNeeded] = useState<any>()
  const [leftOver, setLeftOver] = useState<any>()
  

  // type Vehicle = {
  //   src: string;
  //   name: string;
  //   weight: number;
  // }

//   type Vehicle =  {
//     'Uhaul Pickup Truck': string;
//     'Uhaul 10 Foot Truck': string;
//     'Uhaul Cargo Van': string;
//     'Uhaul 15 Foot Truck': string;
//     'Uhaul 26ft Moving Truck': string;
// }

  const vehicles: any = {'Uhaul Pickup Truck': 'assets/img/uhaul-pickup-SM.png', 'Uhaul 10 Foot Truck': 'assets/img/10Small.png', 'Uhaul Cargo Van': 'assets/img/uhaul-cargo-van-SM.png', 'Uhaul 15 Foot Truck': 'assets/img/15Small.png', 'Uhaul 26ft Moving Truck': 'assets/img/26Small.png'}
  

  const getTruck = async () => {
    let totalTrucks:any = []
    let goal:any;
    for (let i = 0; i < poopProfiles.length; i++) {
      let user = poopProfiles[i].user;
      let poopInfo = poopProfiles[i].poopInfo;
      if (user === userInfo.id) {
        // setUserPoop(poopInfo)
        goal = poopInfo
      }
    }
    // console.log(goal);
    while (goal > 9600){
      totalTrucks.push('Uhaul 26ft Moving Truck')
      goal -= 9600;
    }
    while (goal > 6385){
      totalTrucks.push('Uhaul 15 Foot Truck')
      goal -= 6385;
    }
    while (goal > 4000){
      totalTrucks.push('Uhaul Cargo Van')
      goal -= 4000;
    }
    while (goal > 2810){
      totalTrucks.push('Uhaul 10 Foot Truck')
      goal -= 2810;
    }
    while (goal > 1980){
      totalTrucks.push('Uhaul Pickup Truck')
      goal -= 1980;
    }
    setTrucksNeeded(totalTrucks);
    setLeftOver(goal)
    
  };
  
  useEffect(() => {
    if (poopProfiles && userInfo){
      getTruck()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[poopProfiles, userInfo]);


  console.log(trucksNeeded)
  console.log(leftOver)

  return (
    <>
    {trucksNeeded && leftOver ?
      <IonList>
      {trucksNeeded.map((truck: any, index: number) => (
        <IonItem key={index}>
          <IonImg src={vehicles[truck]} />
          <IonLabel></IonLabel>
        </IonItem>
        
      ))}
      <h2>
        {leftOver}
      </h2>
    </IonList>
      
    :
    ""  
    }
    </>
  );
};

export default UhaulComp;
