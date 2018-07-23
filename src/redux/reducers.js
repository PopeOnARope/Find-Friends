import { createAction, handleActions } from "redux-actions";

const defaultState = {
  user: {
    name: "John Pope",
    friends: [
      {
        avatar:
          "https://img.buzzfeed.com/buzzfeed-static/static/campaign_images/webdr06/2013/4/19/11/28-ways-to-live-life-like-lucille-bluth-1-18801-1366385986-4_big.jpg",
        name: "Lucille",
        info:
          "Lorem ipsum dolor sit amet, cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        lat: 32.796421,
        lng: -79.9312164
      },
      {
        avatar:
          "https://vignette.wikia.nocookie.net/arresteddevelopment/images/f/f6/Season_4_Poster_-_George_Michael_Bluth_01.jpg/revision/latest?cb=20130521213443",
        name: "George Michael",
        info:
          "Lorem ipsum dolor sit amet, cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        lat: 32.795421,
        lng: -79.9412164
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/83006069/gobbluth_400x400.jpg",
        name: "GOB Bluth",
        info:
          "Lorem ipsum dolor sit amet, cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        lat: 32.794421,
        lng: -79.9612164
      }
    ]
  },
  showAddFriendForm: false,
  themes: {
    blue: {
      primaryLight: "#d4d8d4",
      primaryDark: "#326ada",
      fontFamilyH1: "bebas"
    },
    CofC: {
      primaryDark: "#660000",
      primaryLight: "#eee",
      fontFamilyH1: "Lobster"
    },
    mcDonalds: {
      primaryDark: "#E84855",
      primaryLight: "#FFFD82",
      fontFamilyH1: "roboto"
    },
    green: {
      primaryDark: "#28965A",
      primaryLight: "#7CFEF0",
      fontFamilyH1: "Georgia"
    }
  },
  theme: "blue"
};

export const toggleAddFriendForm = createAction("TOGGLE_ADD_FRIEND_FORM");
export const addFriend = createAction("ADD_FRIEND");
export const updateTheme = createAction("UPDATE_THEME");
export const toggleDetails = createAction("TOGGLE_DETAILS");

const reducer = handleActions(
  {
    TOGGLE_ADD_FRIEND_FORM: state => ({
      ...state,
      showAddFriendForm: !state.showAddFriendForm
    }),
    ADD_FRIEND: (state, { payload }) => {
      let newFriends = state.user.friends.map(friend => friend);
      newFriends.push({
        ...payload,
        lat: 32.785421,
        lng: -79.9412164
      });
      return {
        ...state,
        user: {
          ...state.user,
          friends: newFriends
        },
        showAddFriendForm: false
      };
    },
    UPDATE_THEME: (state, { payload }) => {
      return {
        ...state,
        theme: payload
      };
    },
    TOGGLE_DETAILS: (state, { payload: { idx } }) => {
      const newFriends = state.user.friends.map(friend => friend);
      newFriends[idx] = {
        ...newFriends[idx],
        showDetails: !newFriends[idx].showDetails
      };
      return {
        ...state,
        user: {
          ...state.user,
          friends: newFriends
        }
      };
    }
  },
  defaultState
);

export default reducer;
