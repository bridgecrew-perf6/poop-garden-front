import { IonItem, IonLabel, IonList, IonSkeletonText } from '@ionic/react';

const SkeletonFriends: React.FC = () => {

  const friendAmount = 8;
  
  return (
    <IonList>
      {[...Array(friendAmount)].map((friend, index) => {
        return (
          <IonItem key={ index }>
            <IonLabel>
              <h1>
                <IonSkeletonText animated style={{width: '25%'}} />
              </h1>
              <h3>
              <IonSkeletonText animated style={{width: '35%'}} />
              </h3>
              <p>
              <IonSkeletonText animated style={{width: '15%'}} />
              </p>
            </IonLabel>
          </IonItem>
        )
      })}
    </IonList>
  );
};

export default SkeletonFriends;