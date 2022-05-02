import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./Tab1.scss";
// stores and sstore functions
import { UserStore } from "../store";
import { PoopStore } from "../store";
import { FriendStore } from "../store";
import { useStoreState } from "pullstate";
import { getUserInfo } from "../store/Selectors";
import { useAuth } from "../contexts/auth.js";
//useResource hooks
import useResourcePoop from "../hooks/useResourcePoop";
import useResourceFriends from "../hooks/useResourceFriends";
// import { SplashScreen } from '@capacitor/splash-screen';
import LoginForm from "../components/Forms/loginForm";
import SignupForm from "../components/Forms/signupForm";
import { SplashScreen } from '@capacitor/splash-screen';

// This is basically a landing page where the user can sign in. It is also used to grab all of the information that we need from the backend and store it in state.


const Tab4: React.FC = () => {
  // Auth Variables
  const { user, logout } = useAuth();
  // resources hook variables
  const { resourcesPoop } = useResourcePoop();
  const { resourcesFriends } = useResourceFriends();
  const userInfo = useStoreState(UserStore, getUserInfo);
  // bringing all of our necessary api information into state and editing when necessary
  useEffect(() => {

    UserStore.update((s) => {
      s.userInfo = user;
    });
    FriendStore.update((s) => {
      s.friends = resourcesFriends;
    });
    PoopStore.update((s) => {
      s.poopProfiles = resourcesPoop;
    });
  }, [resourcesFriends, resourcesPoop, user, userInfo]);


  const [segment, setSegment] = useState<any>("signIn");
  let component = null;

  switch (segment) {
    case "signIn":
      component = <LoginForm />;
      break;

    case "newUser":
      component = <SignupForm />;
      break;
  }

  const handleLogout = () => {
    UserStore.update((s) => {
      s.userInfo = {};
    });
    FriendStore.update((s) => {
      s.friends = [];
    });
    PoopStore.update((s) => {
      s.poopProfiles = [];
    });
    logout()
  }
  SplashScreen.hide();



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Sign in Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sign in Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        {user ? (
          // user is logged in- shows log in button
          <IonButton
            className="ion-margin-top"
            type="button"
            strong={true}
            expand="block"
            onClick={() => handleLogout()}
          >
            Log Out
          </IonButton>
        ) : (
          // user is not logged in
          <div>
            <IonSegment
              onIonChange={(e) => setSegment(e.detail.value)}
              color="warning"
            >
              <IonSegmentButton value="signIn">
                <IonLabel>Sign In</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="newUser">
                <IonLabel>New User</IonLabel>
              </IonSegmentButton>
            </IonSegment>
            {component}
          </div>
        )}
        <h1 className="ion-text-center">💩Welcome to QuickPoops!💩</h1>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
