import { Store } from 'pullstate';
// This is the store that keeps track of all available poop profiles

interface poopStoreInt {
  poopProfiles: any[];
}

const PoopStore = new Store<poopStoreInt>({
  poopProfiles: [],
});

export default PoopStore;