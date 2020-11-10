import React, { useState } from "react";
import "./App.css";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { connect, Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
}

function UserInput() {
  return (
    <div>
      <h1>UserInputSection</h1>
    </div>
  );
}

export default App;
