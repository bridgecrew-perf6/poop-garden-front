import { Store } from 'pullstate';
// import { useAuth } from '../contexts/auth.js';


// const { user, login, logout } = useAuth();

interface userStoreInt {
  userInfo: any;
}



const UserStore = new Store<userStoreInt>({
  userInfo: {},
});

export default UserStore;