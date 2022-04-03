import { Store } from 'pullstate';

interface UserInfoStore {
  // storeArray: Array<any>;
  userName: string | undefined;
  userEmail: string | undefined;
  userPassword: string | undefined;
  userId: number | undefined;
  PoopProfileInfo: Array<any>;
  userPoopInfo: number | null;
  userFriends: [];//right now is connected to all users. will eventually be a real friends list
}

export const MyStore = new Store<UserInfoStore>({
  userName: undefined,
  userEmail: undefined,
  userPassword: undefined,
  userId: undefined,
  PoopProfileInfo: [],
  userFriends: [],
  userPoopInfo: null,
})
