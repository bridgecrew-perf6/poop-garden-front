import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import "./Tab3.scss";
import { Share } from '@capacitor/share';
// import { MyStore } from '../store'

import React from "react";
// import axios from 'axios';
// import { text } from 'ionicons/icons';

const Tab3: React.FC = () => {
  Share.share({
    title: 'See cool stuff',
    text: 'Really awesome thing you need to see right meow',
    url: 'http://ionicframework.com/',
    dialogTitle: 'Share with buddies',
  });
  // Right now you absolutely have to start on tab 2 on every refresh. will haveto see how i feel about that in the long run

  // const PoopProfileInfo = MyStore.useState(s => s.PoopProfileInfo);
  // const userPoopInfo = MyStore.useState(s => s.userPoopInfo);
  // const [text, setText] = useState<any>();
  // const dbId = PoopProfileInfo[0].id
  // console.log(userPoopInfo)
  // console.log(PoopProfileInfo)

  // const printText = (e: any) => {
  //   e.preventDefault();
  //   console.log(text);
  //   MyStore.update(s => {
  //     s.userPoopInfo = parseInt(text);
  //   })
  //   console.log(text);
  //   // let url = `http://127.0.0.1:8000/api/v1/pooper/${dbId}/`
  //   let url = `https://poop-garden-back.herokuapp.com/api/v1/pooper/${dbId}/`
  //   let data = {
  //     name: PoopProfileInfo[0].name,
  //     email: PoopProfileInfo[0].email,
  //     poopInfo: text,
  //   }
  //   axios.put(url, data, {headers: {'Content-Type': 'application/json'}})
  //   .then((response) => {
  //   console.log(response.data);
  //   // return response.data;
  //   })

  // }

  return (
    <div>
      <IonPage>
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle>Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 3</IonTitle>
            </IonToolbar>
          </IonHeader>
          tab3 stuff
          {/* <IonList>
          <IonItem>
            {userPoopInfo === 0 ?
            <form onSubmit={printText}>
              <IonInput
                // value={text}
                placeholder="Enter Input"
                onIonChange={e => setText(e.detail.value!)} clearInput
              ></IonInput>
              <IonButton type="submit">
                save poop
              </IonButton>
            </form>:
            'Thanks for adding your poop to the pile! you can now go back to the poop statistics page and see how you stack up'
            }
          </IonItem>
        </IonList> */}
        </IonContent>
      </IonPage>
    </div>
  );
};

export default Tab3;
