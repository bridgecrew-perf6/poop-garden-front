import { IonItem, IonButton, IonSearchbar, IonList, IonAvatar, IonLabel } from '@ionic/react';
import { FriendStore } from '../../store';
import { useStoreState } from 'pullstate';
import { getFriends } from '../../store/Selectors';
import React, { useState, useEffect } from 'react';
import useResourceUsers from '../../hooks/useResourceUsers'

const AddFriends: React.FC = () => {

  // what the user is typing in
  const [possibleFriend, setPossibleFriend] = useState<any>();
  //original list of users
  const { resourcesUsers } = useResourceUsers();
  //list of users minus friends and self
  const [potentialFriends, setPotentialFriends] = useState<any>([])
  //list of friends
  const friends = useStoreState(FriendStore, getFriends);
 
  // console.log(friends);
  console.log(potentialFriends);


  useEffect(() => {
    // filtering through users
    if (resourcesUsers && friends) {
      let friendIds: any[] = []

      for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        let id = friend.id;
        friendIds.push(id)
      }
      setPotentialFriends(resourcesUsers.filter((user: any) => !friendIds.includes(user.id))); 
    }
  },[resourcesUsers, friends])

  // const handleSubmit = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
    
  //   for (let i = 0; i < resourcesUsers.length; i++) {
  //     let user = resourcesUsers[i];
  //     let userName = user.username;
  //     if (userName === possibleFriend){
  //       setFriendMatch(resourcesUsers[i])
  //     }
  //   }
  //   // login(tempName, tempPassword)
  //   // router.push('/tab1')
  // }
  // console.log(friends);
  

  return (
    <>
      <h3 className="ion-text-center">You cant just go snooping around people's crap!</h3> 
      <p className="ion-text-center">Enter the username of a friend and we'll ask them how they feel about becoming buddies</p>
      
        <IonItem>
          
          <IonSearchbar value={possibleFriend} onIonChange={e => setPossibleFriend(e.detail.value!)} showCancelButton="never"></IonSearchbar>

        </IonItem>
        <h4 className="ion-text-center">Possible Friends</h4>

          {/* <IonButton className="ion-margin-top" type="submit" expand="block">
            find {possibleFriend}
          </IonButton> */}
      
      {potentialFriends ?

      <IonList>
        {// eslint-disable-next-line array-callback-return
        potentialFriends.map((user: any, index: React.Key | null | undefined) => {

          // if (`${possibleFriend}` === user.username) {
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
            </IonItem>
          }

        })}
      </IonList>
      :
      'search for a friend'
      }
    </>
  )
}

export default AddFriends;