import { IonButton, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonImg, IonPage, IonRouterLink, IonRow, IonToolbar, IonTitle } from '@ionic/react';
import React from "react";
import LoginButton from '../Login/LoginButton'

const Landing: React.FC = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to the Poop Garden!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
						<IonRow className={ `ion-text-center ion-justify-content-center` }>
							<IonCol size="11">
								<IonCardTitle> Lets all count our poops?</IonCardTitle>
							</IonCol>
						</IonRow>

						<IonRow className={ `ion-text-center ion-justify-content-center` }>
								<IonCol size="11">
                  <LoginButton />
								</IonCol>
						</IonRow>
					</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Landing;