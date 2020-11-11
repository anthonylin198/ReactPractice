import React from "react";
import "../App.css";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(allReducers, applyMiddleware(thunk));

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
      <button>enter</button>
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
