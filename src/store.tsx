import { Store } from 'pullstate';

interface UserInfoStore {
  // storeArray: Array<any>;
  userInfo: [];
  userEmail: string | undefined;
  userName: string | undefined;
  userFriends: [];//right now is connected to all users. will eventually be a real friends list
}

export const MyStore = new Store<UserInfoStore>({
  userInfo: [],
  userEmail: undefined,
  userName: undefined,
  userFriends: []
})







// interface IUIStore {
//   isDarkMode: boolean;
  
// }

// export const UIStore = new Store<IUIStore>({
//   isDarkMode: true,
// });