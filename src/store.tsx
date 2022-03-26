import { Store } from 'pullstate';

interface UserInfoStore {
  // storeArray: Array<any>;
  userInfo: [];
  userEmail: string | undefined;
  userName: string | undefined;
  databaseId: number | undefined;
}

export const MyStore = new Store<UserInfoStore>({
  userInfo: [],
  userEmail: undefined,
  userName: undefined,
  databaseId: undefined
})







// interface IUIStore {
//   isDarkMode: boolean;
  
// }

// export const UIStore = new Store<IUIStore>({
//   isDarkMode: true,
// });