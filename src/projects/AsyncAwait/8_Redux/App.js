import React from "react";
import "../App.css";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { getUsersReducer } from "./reducers/getUsersReducer";

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
  return (
    <div>
      <input></input>
      <button onClick={() => getUsersReducer()}>enter</button>
    </div>
  );
};

const List = () => {
  return (
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default App;
