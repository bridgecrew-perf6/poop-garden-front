import { IonAvatar, IonButton, IonItem, IonLabel } from '@ionic/react';




export const Person = ({ person }) => {
  return (
    <IonItem lines='full'>
      <IonAvatar></IonAvatar>
      <IonLabel>
        <h1>{ person.username }</h1>
        <p>{ person.email }</p>
      </IonLabel>

      <IonButton color='primary' fill='outline'>
        See Information
      </IonButton>
    </IonItem>
  )
}