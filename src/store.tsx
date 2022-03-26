import { Store } from 'pullstate';

interface UserInfoStore {
  // storeArray: Array<any>;
  userInfo: [];
  userEmail: string | undefined;
  userName: string;
}

export const MyStore = new Store<UserInfoStore>({
  userInfo: [],
  userEmail: '',
  userName: ''
})







// interface IUIStore {
//   isDarkMode: boolean;
  
// }

// export const UIStore = new Store<IUIStore>({
//   isDarkMode: true,
// });