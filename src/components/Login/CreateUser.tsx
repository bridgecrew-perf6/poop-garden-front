import { IonInput, IonItem, IonButton } from '@ionic/react';
import React, { useState } from "react";
// import LoginButton from '../Login/LoginButton'
// import LogoutButton from '../Login/LogoutButton'
// import Charty from '../Charty/charty'
// import { useAuth0 } from "@auth0/auth0-react";
import { MyStore } from '../../store'
import axios from 'axios';


const CreateUser: React.FC = () => {
  //variables brought in from global state
  const userEmail = MyStore.useState(s => s.userEmail);
  //temporary varibale to store form contents
  const [tempName, setTempName] = useState<string>(); 
  //function that sends the user inputed name to global state as the userName and adds the entire user profile to the database
  const setName = () => {
    console.log(tempName);
    MyStore.update(s => {
      s.userName = tempName;
    })

    // let url = 'https://poop-garden-back.herokuapp.com/api/v1/pooper/';
    let url = `http://127.0.0.1:8000/api/v1/pooper/`
    let data = {
      name: tempName,
      email: userEmail,
      poopInfo: 0,
    }
    axios.post(url, data, {headers: {'Content-Type': 'application/json'}})
    .then((response) => {
    console.log(response.data);
    // return response.data;
    })
  }

  //function that captures the user's input as they type in a temporary state to be submitted once they hit submit button
  const handleChange = (name: string | undefined) => {
    setTempName(name);
    console.log(name);
  }

  return (
    <form onSubmit={setName}>
      <IonItem>
       <IonInput  placeholder="Enter Name" onIonChange={e => handleChange(e.detail.value!)}></IonInput>
      </IonItem>

      <IonButton className="ion-margin-top" type="submit" expand="block">
        Create User Name
      </IonButton>
    </form>
  );
};

export default CreateUser;