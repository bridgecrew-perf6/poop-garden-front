//using reselect library
import { createSelector } from 'reselect'


const getState = state => state

// get functions


// Friend store selectors
export const getFriends = createSelector(getState, state => state.friends);

//poop profile selectors
export const getPoopProfiles = createSelector(getState, state => state.poopProfiles);

//havnt finished messing with this yet, but below is a way of only pulling the poop profiles that i want. I think i found another way to accomplish what i was going for, but this might still come in handy

// export const getFriendsPoops = (getState, state => state.poopProfiles.filter(person => person.id > 5))

//user info store selectore
export const getUserInfo = createSelector(getState, state => state.userInfo)