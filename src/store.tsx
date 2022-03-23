import { Store } from 'pullstate';

interface UserInfoStore {
  // storeArray: Array<any>;
  userInfo: [];
}

export const MyStore = new Store<UserInfoStore>({
  userInfo: [],
})







// interface IUIStore {
//   isDarkMode: boolean;
  
// }

// export const UIStore = new Store<IUIStore>({
//   isDarkMode: true,
// });