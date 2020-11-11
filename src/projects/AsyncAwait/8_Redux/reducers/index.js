import { getUsersReducer } from "./getUsersReducer";
import { notesReducer } from "./getUsersReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  getFollowers: getUsersReducer,
  notesReducer,
});

export default allReducers;
