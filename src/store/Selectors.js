//using reselect library
import { createSelector } from 'reselect'


const getState = state => state

// get functions

export const getFriends = createSelector(getState, state => state.friends);

export const getPoopProfiles = createSelector(getState, state => state.poopProfiles);

export const getUserInfo = createSelector(getState, state => state.userInfo)