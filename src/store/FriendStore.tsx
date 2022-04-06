import { Store } from 'pullstate';
// This is the store that keeps track of the user's friends
interface friendStoreInt {
  friends: any[];
}

const FriendStore = new Store<friendStoreInt>({
  friends: [],
});

// function that checks poop profiles to see if they are friends. if they are, we take the information we want from their poop profile and add it to their user information
export const addPoopInfo = (poopProfile: any) => {

  FriendStore.update(s => {
    if (s.friends){
      for (let i=0; i<s.friends.length; i++){
        let friend = s.friends[i];
        if(friend.id === poopProfile.user){
          friend.poopInfo = poopProfile.poopInfo
        }
      }
    }
  });
}

export default FriendStore;