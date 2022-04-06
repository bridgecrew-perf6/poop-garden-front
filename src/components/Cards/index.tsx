import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent
} from "@ionic/react";
import React, { useEffect, useState } from "react";
// import { MyStore } from '../../store'
import useResourcePoop from '../../hooks/useResourcePoop';



const Cards: React.FC = () => {

  const { resourcesPoop } = useResourcePoop();
  // const userFriends:any = MyStore.useState(s => s.userFriends);
  // const friendsPoop:any = MyStore.useState(s => s.friendsPoop);

  console.log(resourcesPoop)
  // console.log(userFriends)
  
  return (
    <div>
      {/* {friendsPoop && userFriends ?

      <div>

      </div>
  
    :
      'Loading...'} */}


    </div>
    
  );
};

export default Cards;