import { IonItem, IonButton, IonSearchbar } from '@ionic/react';
import { FriendStore } from '../../store';
import { useStoreState } from 'pullstate';
import { getFriends } from '../../store/Selectors';
import React, { useState, useEffect } from 'react';
import useResourceUsers from '../../hooks/useResourceUsers'

const AddFriends: React.FC = () => {
  
  // const friends = useStoreState(FriendStore, getFriends);
  const [possibleFriend, setPossibleFriend] = useState<any>();
  const [friendMatch, setFriendMatch] = useState<any>()

  const { resourcesUsers } = useResourceUsers();

  const friends = useStoreState(FriendStore, getFriends);
 
  // console.log(resourcesUsers);

  useEffect(() => {
    if (friendMatch) {
      console.log(friends)
      console.log('found', friendMatch.username, 'id#', friendMatch.id)
    }

  },[friendMatch, friends])

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    for (let i = 0; i < resourcesUsers.length; i++) {
      let user = resourcesUsers[i];
      let userName = user.username;
      if (userName === possibleFriend){
        setFriendMatch(resourcesUsers[i])
      }
    }
    // login(tempName, tempPassword)
    // router.push('/tab1')
  }
  // console.log(friends);
  

  return (
    <>
    <h3 className="ion-text-center">You cant just go snooping around people's crap!</h3> 
    <p className="ion-text-center">Enter the username of a friend and we'll ask them how they feel about becoming buddies</p>
    <form onSubmit={(e) => {handleSubmit(e)}
        }>
          <IonItem>
            
            <IonSearchbar value={possibleFriend} onIonChange={e => setPossibleFriend(e.detail.value!)} showCancelButton="never"></IonSearchbar>

          </IonItem>

          <IonButton className="ion-margin-top" type="submit" expand="block">
            find {possibleFriend}
          </IonButton>
        </form>
    </>
  )
}

export default AddFriends;