import { GETFOLLOWERS } from "../actions/actions";
import { getFollowers } from "../actions/actions";

const initialState = {
  followers: [],
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETFOLLOWERS: {
      return { ...state, followers: [action.payload] };
    }
    default:
      return state;
  }
};

// async thunk action for user
export const getUsersReducer = () => async (dispatch, getState) => {
  console.log("here");
  const notes = await fetch(
    `https://api.github.com/users/anthonylin198/followers`
  ).then((res) => res.json());
  dispatch(getFollowers(notes));
};
