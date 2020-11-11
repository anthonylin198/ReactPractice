/*

install reduxjs/toolki and react-redux

*/

import React, { useState } from "react";
import "./App.css";
import { Provider, useSelector, useDispatch } from "react-redux";
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

// Reducer
const taskReducer = (state = tasksList, action) => {
  const newState = state.slice();
  switch (action.type) {
    case "COMPLETE":
      if (newState[action.index].complete === true) {
        newState[action.index].complete = false;
      } else {
        newState[action.index].complete = true;
      }
      return newState;
    default:
      return state;
  }
};

// actions
const completeTask = (index) => {
  return {
    type: "COMPLETE",
    index,
  };
};
// store
const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Summary />
        <CardsContainer />
      </div>
    </Provider>
  );
};

const Summary = () => {
  return (
    <div className="container">
      <h1>Total Tasks: here</h1>
      <h2> Tasks Complete: </h2>
    </div>
  );
};

const CardsContainer = () => {
  // const cards = useSelector((state) => state);
  const cards = tasksList;
  const cardsMap = cards.map((card, i) => {
    return <Card key={i} index={i} title={card.title} />;
  });
  return <div className="cardsContainer">{cardsMap}</div>;
};

const Card = ({ index, title }) => {
  const card = useSelector((state) => state);
  let completed = "not complete";
  if (card[index].complete) {
    completed = "complete";
  }
  let buttonLabel = "mark complete";
  if (card[index].complete) {
    buttonLabel = "mark not complete";
  }
  const dispatch = useDispatch();
  return (
    <div className="card">
      <h3>{title}</h3>
      <h3>{completed}</h3>
      <button onClick={() => dispatch(completeTask(index))}>
        {buttonLabel}
      </button>
    </div>
  );
};
export default App;
