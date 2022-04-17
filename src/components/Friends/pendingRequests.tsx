import useResourceRequests from "../../hooks/useResourceRequests";
import { IonList, IonItem, IonLabel, IonButton, IonText } from "@ionic/react";


const PendingRequests: React.FC = () => {
  const { resourcesRequests, acceptRequest } = useResourceRequests();


  const handleAccept = async (request:any) => {
    let aceepted = await acceptRequest({
      id: request.id,
    });
    
    console.log(aceepted);
  }

  console.log(resourcesRequests);

  return (
    <>
      {resourcesRequests && resourcesRequests.length > 0 ? (
        <IonList>
          {resourcesRequests.map(
            (request: any, index: React.Key | null | undefined) => {
              return (
                <IonItem key={index}>
                  <IonLabel>
                    <IonText>
                      <p>{request.from_user} would like to be your friend!</p>
                    </IonText>
                  </IonLabel>
                  <IonButton fill="outline" slot="end" color="tertiary" onClick={() => handleAccept(request)}>
                    accept
                  </IonButton>
                  <IonButton fill="outline" slot="end" color="medium">
                    decline
                  </IonButton>
                </IonItem>
              );
            }
          )}
        </IonList>
      ) : (
        <p className="ion-text-center">You have no pending requests</p>
      )}
    </>
  );
};

export default PendingRequests;
