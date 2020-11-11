import { configureStore, createSlice } from "@reduxjs/toolkit";
import { connect, Provider, useSelector } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 2,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
  },
});

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state) => {
      state.push("we here");
    },
  },
});

export const { incremented } = counterSlice.actions;
export const { addItem } = itemsSlice.actions;

const reducer = {
  counter: counterSlice.reducer,
  items: itemsSlice.reducer,
};

const store = configureStore({ reducer: reducer });

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>We here</h1>
      </div>
    </Provider>
  );
};

export default App;
