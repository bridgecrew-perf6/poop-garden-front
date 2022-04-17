import { Store } from "pullstate";
// This is the store that keeps track of the user's friends
interface friendStoreInt {
  friends: any[];
}

const FriendStore = new Store<friendStoreInt>({
  friends: [],
});

export default FriendStore;
