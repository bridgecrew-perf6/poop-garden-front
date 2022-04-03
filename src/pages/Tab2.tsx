import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonButton, IonInput, useIonViewWillEnter, useIonViewDidEnter } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
import React, { useState } from 'react';
import './Tab2.scss';
// import Card from '../components/Card'
// import Charty from '../components/Charty/charty';
import { useAuth } from '../contexts/auth.js';
// import LoginButton from '../components/Login/LoginButton'
// import LogoutButton from '../components/Login/LogoutButton'
import Landing from '../components/Landing'
import Home from '../components/Home/home'
import { MyStore } from '../store'
import axios from 'axios';



const Tab2: React.FC = () => {
  const { user, login, logout } = useAuth();
  const userName = MyStore.useState(s => s.userName);
  const userEmail = MyStore.useState(s => s.userEmail);
  const userId = MyStore.useState(s => s.userId);
  const userPassword = MyStore.useState(s => s.userPassword);


  // const [user, setUser] = useState();
  
  React.useEffect(() => {
    // use what the user entered to log them into their api profile
    MyStore.update(s => {
      s.userId = user?.id
      s.userEmail = user?.email;
    })
    if (userId){
      console.log(userId);
      login(userName, userPassword)
      .then(
      axios.get('http://127.0.0.1:8000/api/data_profiles/poop_profiles/'))
      .then((response: { data: any; }) => {
        console.log(response.data)
      })
    }
  },);

  // console.log(userEmail, userId)

  // const handleLogin = () => {
  //   // console.log(tempName)

  //   // MyStore.update(s => {
  //   //   s.userName = tempName;
  //   // })
  //   // let url = 'http://127.0.0.1:8000/api/data_profiles/poop_profiles/'
  //   // axios.get(url)
  //   // .then((response) => {
  //   //   console.log(response.data);
  //   // })
  //   // console.log(user)
  // }


  // const [tempName, setTempName] = useState<string>()
  // const [tempPassword, setTempPassword] = useState<any>()
  // console.log(tempName)
  // console.log(tempPassword)


  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{ userName }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      

      {/* {isAuthenticated ?
        <div>
          <Home />
        </div>:
        <div>
          <Landing />
        </div>
        } */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
