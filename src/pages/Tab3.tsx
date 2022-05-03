import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  useIonRouter,
  IonImg,
} from "@ionic/react";
import "./Tab3.scss";
import React, { useEffect } from "react";

const Tab3: React.FC = () => {
  const router = useIonRouter();

  let storedUser: any = localStorage.getItem("user");
  let storedToken: any = localStorage.getItem("token");

  // checks for a user in local storage. if found, sends to profile page. if not, sends to login page.
  useEffect(() => {
    if (storedToken && storedUser) {
      router.push("/tab2");
    } else {
      router.push("/tab4");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedUser, storedToken]);

  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar color="secondary"></IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar></IonToolbar>
          </IonHeader>
          <IonImg src={"assets/icon/favicon.png"} />
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Tab3;
