import React, { useState } from "react";
import "./App.css";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { connect, Provider } from "react-redux";
import { createStore } from "redux";
// Action Increment : just describe what you will do - function that returns an object
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// Reducer - returns a piece of the object, which will udpate store.
// Have a lot of different reducers for each type
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// Store -> Globalized State
let store = createStore(counter);

// display the store
store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());

// The Actual app
function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <UserInput />
        <List />
      </div>
    </Provider>
  );
}

const UserInput = () => {
  store.subscribe(() => console.log(store.getState()));
  return (
    <div>
      <input></input>
      <button>submit</button>
    </div>
  );
};

function List() {
  return (
    <div>
      <h1> List</h1>
    </div>
  );
}

export default App;
