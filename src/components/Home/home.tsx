import { IonButton, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar, IonTitle } from '@ionic/react';
import React from "react";
import LoginButton from '../Login/LoginButton'
import LogoutButton from '../Login/LogoutButton'
import Charty from '../Charty/charty'
import { useAuth0 } from "@auth0/auth0-react";
import { MyStore } from '../../store'



const Home: React.FC = () => {

  const userEmail = MyStore.useState(s => s.userEmail);
  const userName = MyStore.useState(s => s.userName);

  const { user, isAuthenticated, isLoading } = useAuth0();

  MyStore.update(s => {
    s.userEmail = user?.email;  
  })
  
  console.log(userEmail);
  // My next goal right now is to check if this userEmail is in the database. if it is, i also want to grab the name from the database and add it to my state. if it isnt, i will ask the user for a name and add the user to the database with email and username. First off i need to figure out how to add a new friend from the front end manually. then i can figure out how to add them automatically if they do not exist
  
  
  // console.log(userName);

  return (
    <div>
      <LogoutButton />
      <Charty /> 
    </div>
  );
};

export default Home;