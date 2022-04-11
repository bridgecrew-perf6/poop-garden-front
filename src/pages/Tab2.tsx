import { IonPage, IonContent, IonLabel, IonSegment, IonSegmentButton, IonHeader, IonTitle, IonToolbar, } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
import React, { useState }from 'react';
import './Tab2.scss';
import FriendsBarChart from '../components/Charts/friendsBarChart'
import FriendsPieChart from '../components/Charts/friendsPieChart'
import { useAuth } from '../contexts/auth.js';
// import Card from '../components/Card'
// import Charty from '../components/Charty/charty';

// import { UserStore } from '../store';
// import { PoopStore } from '../store';
// import { FriendStore } from '../store';
// import { useStoreState } from 'pullstate';
// import { getUserInfo, getFriends, getPoopProfiles } from '../store/Selectors';



const Tab2: React.FC = () => {

  const { user, login } = useAuth();

  const [segment, setSegment] = useState<any>('friends');
  let chart1 = null;
  let chart2 = null;

  switch(segment) {
    case 'friends':
      chart1 = <FriendsBarChart />
      chart2 = <FriendsPieChart />
      break
    
    case 'user':
      chart1 = 'user stats'
      break

    case 'all':
      chart1 = 'all stats'
      break
  }


  
  // const userInfo = useStoreState(UserStore, getUserInfo);
  // const poopProfiles = useStoreState(PoopStore, getPoopProfiles);
  // const friends = useStoreState(FriendStore, getFriends);
 

  // console.log(userInfo);
  // console.log(friends);
  // console.log(poopProfiles);
  
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Poop Statistics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonSegment onIonChange={e => setSegment(e.detail.value)} color="secondary">
          <IonSegmentButton value="user">
            <IonLabel>My Poop Profile</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="friends">
            <IonLabel>Friendly Poop</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="all">
            <IonLabel>The whole pile</IonLabel>
          </IonSegmentButton>
      </IonSegment>
      {chart1}
      {chart2}
      </IonContent>
     </IonPage>

  );
};


export default Tab2;
