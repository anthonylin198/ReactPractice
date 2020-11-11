/*

install reduxjs/toolki and react-redux

*/

import React, { useState } from "react";
import "./App.css";
import { configureStore, createSlice } from "@reduxjs/toolkit";
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

// creating the store
const {
  actions: { complete },
  reducer,
} = createSlice({
  name: "task",
  initialState: tasksList,
  reducers: {
    complete: (state, action) => {
      if (state[action.payload].complete === true) {
        // directly manipulate, takes care under hood
        state[action.payload].complete = false;
      } else {
        state[action.payload].complete = true;
      }
    },
  },
});

const store = configureStore(
  { reducer },
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

const Card = React.memo(({ index, title }) => {
  const card = useSelector((state) => state[index]);
  console.log(card);
  let completed = "not complete";
  if (card.complete) {
    completed = "complete";
  }
  let buttonLabel = "mark complete";
  if (card.complete) {
    buttonLabel = "mark not complete";
  }
  const dispatch = useDispatch();
  return (
    <div className="card">
      <h3>{title}</h3>
      <h3>{completed}</h3>
      <button onClick={() => dispatch(complete(index))}>{buttonLabel}</button>
    </div>
  );
});
export default App;
