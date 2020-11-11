/*

install reduxjs/toolki and react-redux

*/

import React, { useState } from "react";
import "./App.css";
import { useSelector, Provider, useDispatch } from "react-redux";
import { createStore } from "redux";

const tasksList = [
  { title: 1, complete: false },
  { title: 2, complete: false },
  { title: 3, complete: false },
  { title: 4, complete: false },
  { title: 5, complete: false },
  { title: 6, complete: false },
  { title: 7, complete: false },
  { title: 8, complete: false },
  { title: 9, complete: false },
  { title: 10, complete: false },
  { title: 11, complete: false },
  { title: 12, complete: false },
];

// create the reducer with initial state
const taskReducer = (state = tasksList, action) => {
  switch (action.type) {
    case "COMPLETE": {
      const newState = state.slice();
      newState[action.payload].complete = true;
      return newState;
    }
    default:
      return state;
  }
};

// create action
const completeTask = (index) => {
  return {
    type: "COMPLETE",
    payload: index,
  };
};

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Summary />
        <CardsContainer />
      </div>
    </Provider>
  );
};

const Summary = () => {
  return (
    <div>
      <h1>Total Tasks: </h1>
      <h2> Tasks Complete: </h2>
    </div>
  );
};

const CardsContainer = () => {
  const cards = useSelector((state) => state);
  const cardsMap = cards.map((card, i) => {
    return <Card key={i} index={i} title={card.title} />;
  });
  const dispatch = useDispatch();
  return <div className="cardsContainer">{cardsMap}</div>;
};

// create a card
const Card = ({ index, title }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <h3>Status: </h3>
      <button>Select</button>
    </div>
  );
};
export default App;
