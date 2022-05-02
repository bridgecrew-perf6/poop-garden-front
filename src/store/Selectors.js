//using reselect library
import { createSelector } from "reselect";

const getState = (state) => state;

// get functions

// Friend store selectors
export const getFriends = createSelector(getState, (state) => state.friends);

//poop profile selectors
export const getPoopProfiles = createSelector(
  getState,
  (state) => state.poopProfiles
);

//user info store selectore
export const getUserInfo = createSelector(getState, (state) => state.userInfo);
