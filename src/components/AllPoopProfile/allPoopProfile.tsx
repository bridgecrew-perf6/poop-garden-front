import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonText,
} from "@ionic/react";
const PoopProfile: React.FC = () => {
  return (
    <div>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>PoopProfile</IonCardSubtitle>
          <IonCardTitle>All Together now!</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonText color="primary">
            <h1 className="ion-text-center">Area Under Cunstruction!</h1>
          </IonText>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default PoopProfile;
