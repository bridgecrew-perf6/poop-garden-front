import { Store } from "pullstate";
// This is the store that keeps track of the user's friends

let storedFriends: any = localStorage.getItem("friends")
let parsedFriends = JSON.parse(storedFriends)

interface friendStoreInt {
  friends: any[];
}

const FriendStore = new Store<friendStoreInt>({
  friends: parsedFriends || [],
});

export default FriendStore;
