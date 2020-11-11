import { getFollowers } from "../actions/actions";

const initialState = {
  followers: [],
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETFOLLOWERS": {
      return { ...state, followers: action.payload };
    }
    case "ADDONE": {
      return state;
    }
    default:
      return state;
  }
};

// async thunk action for user
export const getUsersReducer = (input) => async (dispatch, getState) => {
  const notes = await fetch(
    `https://api.github.com/users/${input}/followers`
  ).then((res) => res.json());
  dispatch(getFollowers(notes));
};
