import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonItem, IonButton, IonInput, useIonRouter } from '@ionic/react';
import React, { useState } from 'react';
import './Tab1.scss';
//connecting to state store
import { MyStore } from '../store'
// bringing in my Auth Provider
import { useAuth } from '../contexts/auth.js';

// This is the sign in page. the sole purpose of this page is to have the user input their name and password. The information will be saved and the user will be sent to tab 2

const Tab4: React.FC = () => {

  // Auth Variables
  const { user, login, logout } = useAuth();
  
  // global state variables
  const userName = MyStore.useState(s => s.userName);
  const userPassword = MyStore.useState(s => s.userPassword);

  // local state variables
  const [tempName, setTempName] = useState<string>()
  const [tempPassword, setTempPassword] = useState<any>()

  //declaring a variable for the Ion router
  const router = useIonRouter()

  // Use effect to run function on load. will reload whenever the variable in the array at the end changes(currently [userName, userPassword, login])
  React.useEffect(() => {
    // use what the user entered to log them into their api profile
    login(userName, userPassword)
  },[userName, userPassword, login]);


  // function that runs when the user submits the form. takes the name and pass that are being saved in local state and adds them to global state
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    MyStore.update(s => {
      s.userName = tempName
      s.userPassword = tempPassword;
    })
    // using Ion router to send user to the next page
    router.push('/tab2')
  }

  console.log(user)
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign in Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Sign in Page</IonTitle>
          </IonToolbar>
        </IonHeader>

        <form onSubmit={(e) => {handleSubmit(e)}
        }>
          <IonItem>
            <IonInput  placeholder="Enter Name" onIonChange={e => setTempName(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonInput  placeholder="Enter Password" onIonChange={e => setTempPassword(e.detail.value!)}></IonInput>
          </IonItem>

          <IonButton className="ion-margin-top" type="submit" expand="block">
            Log In
          </IonButton>
        </form>

      </IonContent>
    </IonPage>
  );
};

export default Tab4;