import { getFollowers } from "../actions/actions";

const initialState = {
  followers: [],
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETFOLLOWERS": {
      console.log("here");
      return { ...state, followers: [action.payload] };
    }
    case "ADDONE": {
      console.log("here");
      return state;
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
