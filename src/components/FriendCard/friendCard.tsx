// This is a child component of the friends List that renders the friend poop card/modal. It takes in as props the user name and poop info to render that onto a card

import { IonModal, IonContent, IonButton } from "@ionic/react";
import React from "react";
import UserVsFriendChart from "../Charts/userVsFriendChart";
import UserPlusFriendWeight from "./userPlusFriendWeight";

interface FriendProps {
  chosenFriendPoop: number;
  chosenFriendName: string;
  openFriendModal: boolean;
  setOpenFriendModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FriendCard: React.FC<FriendProps> = ({
  chosenFriendPoop,
  chosenFriendName,
  openFriendModal,
  setOpenFriendModal,
}: FriendProps) => {
  const closeModal = () => {
    setOpenFriendModal(false);
  };

  return (
    <IonModal
      isOpen={openFriendModal}
      onDidDismiss={closeModal}
      breakpoints={[0, 0.5, 1]}
      initialBreakpoint={1}
      backdropBreakpoint={0.2}
    >
      <IonContent>
        <IonButton
          size="large"
          onClick={closeModal}
          className="ion-padding-start"
        >
          Close
        </IonButton>
        <h1 className="ion-text-center">{chosenFriendName}</h1>
        <h5 className="ion-text-center">{`${chosenFriendPoop} Pounds of Poop!!`}</h5>

        <UserVsFriendChart
          chosenFriendPoop={chosenFriendPoop}
          chosenFriendName={chosenFriendName}
        />
        <UserPlusFriendWeight chosenFriendPoop={chosenFriendPoop} />
      </IonContent>
    </IonModal>
  );
};

export default FriendCard;
