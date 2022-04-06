import { Store } from 'pullstate';
// import useResourcePoop from '../hooks/useResourcePoop'


// const { resourcesPoop } = useResourcePoop();
interface poopStoreInt {
  poopProfiles: any[];
}



const PoopStore = new Store<poopStoreInt>({
  poopProfiles: [],
});

export default PoopStore;