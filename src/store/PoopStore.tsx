import { Store } from "pullstate";
// This is the store that keeps track of all available poop profiles

let storedPoop: any = localStorage.getItem("poop")
let parsedPoop = JSON.parse(storedPoop)

interface poopStoreInt {
  poopProfiles: any[];
}

const PoopStore = new Store<poopStoreInt>({
  poopProfiles: parsedPoop || [],
});

export default PoopStore;
