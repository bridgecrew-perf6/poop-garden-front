import {
  IonContent,
  useIonRouter,
  IonSpinner
} from "@ionic/react";
import "./Tab3.scss";
import React, { useEffect } from "react";
import { useAuth } from "../contexts/auth.js";


const Tab3: React.FC = () => {
  const router = useIonRouter();
  const { login } = useAuth();


  let upass: any = localStorage.getItem("upass");
  let uname: any = localStorage.getItem("uname")
  let storedUser: any = localStorage.getItem("user");
  let storedToken: any = localStorage.getItem("token");

  // checks for a user in local storage. if found, sends to profile page. if not, sends to login page.
  useEffect(() => {
    if (storedToken && storedUser) {
      login(uname, upass)
      router.push("/tab2");
    } else {
      router.push("/tab4");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedUser, storedToken]);

  return (
    <IonContent>
      <IonSpinner name="bubbles"/>
    </IonContent>
  );
};

export default Tab3;
