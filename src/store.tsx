import { Store } from 'pullstate';

interface UserInfoStore {
  // storeArray: Array<any>;
  userInfo: Array<any>;
  userEmail: string | undefined;
  userName: string | undefined;
  userPoopInfo: number | 0;
  userFriends: [];//right now is connected to all users. will eventually be a real friends list
}

export const MyStore = new Store<UserInfoStore>({
  userInfo: [],
  userEmail: undefined,
  userName: undefined,
  userFriends: [],
  userPoopInfo: 0,
})
