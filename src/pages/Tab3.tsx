import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
// import { UIStore } from '../store'
import { MyStore } from '../store'

const Tab3: React.FC = () => {

  // const isDarkMode = UIStore.useState(s => s.isDarkMode);
  // const userInfo = MyStore.useState(s => s.userInfo);
  // let userName = userInfo[0]
  // console.log(userInfo)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</IonTitle> */}
          {/* <IonTitle>{userInfo[0] === 'michael' ? 'michael' : 'someone else'}</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <button onClick = {() => MyStore.update(s => {
          s.userInfo.push('david');
        })}
        > Toggle use info 
        </button> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
