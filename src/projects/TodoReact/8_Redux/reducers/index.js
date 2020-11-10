import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import listReducer from "./list";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  list: listReducer,
});

export default allReducers;
