import { Store } from 'pullstate';

interface UserInfoStore {
  // storeArray: Array<any>;
  userName: string | undefined;
  userEmail: string | undefined;
  userPassword: string | undefined;
  userId: number | undefined;
  PoopProfileInfo: Array<any>;
  userPoopInfo: number | null;
  userFriends: any[];
  friendsPoop: any[];
  allPoop: any[];
}

export const MyStore = new Store<UserInfoStore>({
  userName: undefined,
  userEmail: undefined,
  userPassword: undefined,
  userId: undefined,
  PoopProfileInfo: [],
  userFriends: [],
  friendsPoop: [],
  userPoopInfo: null,
  allPoop: [],
})
