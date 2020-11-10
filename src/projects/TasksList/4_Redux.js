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

// creating the actions
const {
  actions: { complete },
  reducer,
} = createSlice({
  name: "tasks",
  initialState: tasksList,
  reducers: {
    complete: (state, action) => {
      state[action.payload].complete = true;
    },
  },
});

const store = configureStore({ reducer });

const App = () => {
  return <Provider store={store}></Provider>;
};

// component for the tasks complete
const Summary = ({ tasks }) => {
  function tasksComplete(tasks) {
    let counter = 0;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].complete) counter++;
    }
    return counter;
  }
  let completedTasks = tasksComplete(tasks);
  return (
    <div>
      <h1>Total Tasks: {tasks.length}</h1>
      <h2>Tasks Complete: {completedTasks}</h2>
      <h2>
        Tasks Complete: {((completedTasks / tasks.length) * 100).toFixed(2)} %
      </h2>
    </div>
  );
};

export default App;
