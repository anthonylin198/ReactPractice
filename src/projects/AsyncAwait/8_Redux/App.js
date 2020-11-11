import React, { useState } from "react";
import "../App.css";
import allReducers from "./reducers";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { getUsersReducer } from "./reducers/getUsersReducer";
import { addOne } from "./actions/actions";

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <UserInput />
        <List />
      </div>
    </Provider>
  );
};

const UserInput = () => {
  const [input, updateInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)}></input>
      <button onClick={() => dispatch(getUsersReducer(input))}>enter</button>
      <button onClick={() => dispatch(addOne())}>Test</button>
    </div>
  );
};

const List = () => {
  // get the list
  const followers = useSelector((state) => state.notesReducer.followers);

  const followersArr = followers.map((follower, i) => {
    return <div key={i}>{follower.login}</div>;
  });
  return (
    <div>
      <div>{followersArr}</div>
    </div>
  );
};

export default App;
