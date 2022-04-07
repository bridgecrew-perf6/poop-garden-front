import { IonPage } from '@ionic/react';// IonItem, IonAvatar, IonImg, IonLabel, IonList
import React from 'react';
import './Tab2.scss';
import FriendsBarChart from '../components/Charts/friendsBarChart'
import FriendsPieChart from '../components/Charts/friendsPieChart'
// import Card from '../components/Card'
// import Charty from '../components/Charty/charty';

// import { UserStore } from '../store';
// import { PoopStore } from '../store';
// import { FriendStore } from '../store';
// import { useStoreState } from 'pullstate';
// import { getUserInfo, getFriends, getPoopProfiles } from '../store/Selectors';



const Tab2: React.FC = () => {
  
  // const userInfo = useStoreState(UserStore, getUserInfo);
  // const poopProfiles = useStoreState(PoopStore, getPoopProfiles);
  // const friends = useStoreState(FriendStore, getFriends);
 

  // console.log(userInfo);
  // console.log(friends);
  // console.log(poopProfiles);
  
  
  return (
    
    <IonPage>
      <div>
      <FriendsBarChart />
      <FriendsPieChart />
      </div>
     </IonPage>
  );
};


export default Tab2;
