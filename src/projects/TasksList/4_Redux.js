/*

install reduxjs/toolki and react-redux

*/

import React, { useState } from "react";
import "./App.css";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { connect, Provider } from "react-redux";

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
      state[action.payload].complete = true;
    },
  },
});

const store = configureStore(
  { reducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// map State to Movie - so then we just change one movie
const mapStateTask = (state, props) => {
  console.log(state);
  console.log(props.index);
  return { task: state[props.index] };
};
const mapDispatch = { complete }; // from the action

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

// create a card
const Card = connect(
  mapStateTask,
  mapDispatch
)(({ task, complete }) => {
  console.log("here", task);
  return (
    <div className="card">
      <h3>card</h3>
      <h3>Status: {task.complete} </h3>
      <button onClick={() => complete(task.title)}>complete</button>
    </div>
  );
});
export default App;
