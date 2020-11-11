import getUsersReducer from "./getUsersReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({ getFollowers: getUsersReducer });

export default allReducers;
