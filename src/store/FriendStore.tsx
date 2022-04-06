import { Store } from 'pullstate';
// import useResourceFriends from '../hooks/useResourceFriends'


// const { resourcesFriends } = useResourceFriends();
interface friendStoreInt {
  friends: any[];
}



const FriendStore = new Store<friendStoreInt>({
  friends: [],
});

export default FriendStore;