import { IonItem, IonButton, IonSearchbar, IonList, IonAvatar, IonLabel, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { personAddOutline } from 'ionicons/icons';
import { FriendStore } from '../../store';
import { useStoreState } from 'pullstate';
import { getFriends } from '../../store/Selectors';
import React, { useState, useEffect } from 'react';
import useResourceUsers from '../../hooks/useResourceUsers'
// import useResourceFriends from '../../hooks/useResourceFriends';
import useResourceSentRequests from '../../hooks/useResourceSentRequests';
import PendingRequests from './pendingRequests'

const AddFriends: React.FC = () => {

  // what the user is typing in
  const [possibleFriend, setPossibleFriend] = useState<any>();
  //original list of users from hook
  const { resourcesUsers } = useResourceUsers();
  // original list of sent requests from hook
  const { resourcesSentRequests, createResourceSentRequests } = useResourceSentRequests();

  //local version of sent requests
  const [sentRequests, setSentRequests] = useState<any>();

  //list of users minus friends and self
  const [potentialFriends, setPotentialFriends] = useState<any>([])

  //friend we are trying to add
  const [hopefullFriend, setHopefullFriend] = useState<any>()

  //list of friends
  const friends = useStoreState(FriendStore, getFriends);

  //state that shows incoming friend requests
  const [showRequests, setShowRequests] = useState<boolean>(false);


  // console.log(friends);
  console.log(resourcesSentRequests);
  console.log(hopefullFriend)

  const checkIfPendingDisabled = (user: any) => {
    let disabled: boolean | undefined = undefined;
    for (let i = 0; i < sentRequests.length; i++) {
      let request = sentRequests[i];
      if (request.to_user === user.username) {
        disabled = true
        return disabled
      } else {
        disabled = false;
      }
    }
    return disabled;
  }

  const checkIfPendingColor = (user: any) => {
    let color: string | undefined = undefined;
    for (let i = 0; i < sentRequests.length; i++) {
      let request = sentRequests[i];
      if (request.to_user === user.username) {
        color = 'medium';
        return color
      } else {
        color = 'primary';
      }
    }
    return color;
  }

  const checkIfPendingString = (user: any) => {
    let string: string | undefined = undefined;
    for (let i = 0; i < sentRequests.length; i++) {
      let request = sentRequests[i];
      if (request.to_user === user.username) {
        string = 'pending';
        return string
      } else {
        string = 'send request';
      }
    }
    return string;
  }


  const handleRequest = async (user: any) => {
    setHopefullFriend(user)
    let newRequest = await createResourceSentRequests({to_user: user.username})
    setSentRequests([...sentRequests, newRequest])
  }

  useEffect(() => {

    // filtering through users
    if (resourcesUsers && friends && resourcesSentRequests) {
      let friendIds: any[] = []

      for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        let id = friend.id;
        friendIds.push(id)
      }
      setPotentialFriends(resourcesUsers.filter((user: any) => !friendIds.includes(user.id)));
      setSentRequests(resourcesSentRequests)
    }
  },[resourcesUsers, friends, resourcesSentRequests]);

  

  return (
    <>
      <h3 className="ion-text-center">You cant just go snooping around people's crap!</h3> 
      <p className="ion-text-center">Enter the username of a friend and we'll ask them how they feel about becoming buddies</p>
      
        <IonItem>
          
          <IonSearchbar value={possibleFriend} onIonChange={e => setPossibleFriend(e.detail.value!)} showCancelButton="never"></IonSearchbar>

        </IonItem>
        <h4 className="ion-text-center">Possible Friends</h4>

      
      {potentialFriends && sentRequests ?

      <IonList>
        {// eslint-disable-next-line array-callback-return
        potentialFriends.map((user: any, index: React.Key | null | undefined) => {

          if (possibleFriend && user.username.includes(`${possibleFriend}`)) {

            return <IonItem key={index}>
              <IonAvatar>
                      <img src={`https://avatars.dicebear.com/api/bottts/${user.id}${user.poopInfo}.svg?colorful=true`} alt={'little robot avatar for each person'}/>
              </IonAvatar>
              <IonLabel>
                  <h1>{user.username}</h1>
                  <h3>{user.email}</h3>
                  {/* <p>{friend.poopInfo}</p> */}    
              </IonLabel>
              <IonButton fill="outline" slot="end" color={checkIfPendingColor(user)} disabled={checkIfPendingDisabled(user)} onClick={() => handleRequest(user)}>{checkIfPendingString(user)|| 'send request'}</IonButton>
            </IonItem>
          }

        })}
      </IonList>
      :
      'search for a friend'
      }
      {showRequests ?
      <PendingRequests />
      :
      ''
      }
      <IonFab vertical="bottom" horizontal="end" >
          <IonFabButton color="medium" activated={showRequests} onClick={() => setShowRequests(!showRequests)}>
            <IonIcon icon={personAddOutline}/>
          </IonFabButton>
      </IonFab>
    </>
  )
}

export default AddFriends;