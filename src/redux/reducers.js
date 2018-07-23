import { createAction, handleActions } from "redux-actions";

const defaultState = {
  user: {
    name: "John Pope",
    friends: [
      {
        avatar: "https://placekitten.com/g/25/26",
        name: "Jim",
        lat: 32.796421,
        lng: -79.9312164
      },
      {
        avatar: "https://placekitten.com/g/25/25",
        name: "James",
        lat: 32.795421,
        lng: -79.9412164
      },
      {
        avatar: "https://placekitten.com/g/25/24",
        name: "Jenny",
        lat: 32.794421,
        lng: -79.9612164
      }
    ]
  },
  showAddFriendForm: false
};

export const toggleAddFriendForm = createAction("TOGGLE_ADD_FRIEND_FORM");
export const addFriend = createAction("ADD_FRIEND");

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
    }
  },
  defaultState
);

export default reducer;
