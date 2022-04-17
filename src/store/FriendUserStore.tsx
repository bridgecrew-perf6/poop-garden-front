import { Store } from "pullstate";
// This is the store that keeps track of the user's friends
interface friendUserStoreInt {
  friendsAndUsers: any[];
}

const FriendUserStore = new Store<friendUserStoreInt>({
  friendsAndUsers: [],
});

export default FriendUserStore;
