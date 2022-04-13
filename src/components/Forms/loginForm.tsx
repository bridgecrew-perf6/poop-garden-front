import { IonItem, IonButton, IonInput, useIonRouter } from '@ionic/react';
import React, { useState } from 'react';
import { useAuth } from '../../contexts/auth.js';



const LoginForm: React.FC = () => {

  const [tempName, setTempName] = useState<string>();
  const [tempPassword, setTempPassword] = useState<any>();
  const router = useIonRouter();
  const { login } = useAuth();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    login(tempName, tempPassword)
    router.push('/tab1')
  }

  return (
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
  )


  
}

export default LoginForm;