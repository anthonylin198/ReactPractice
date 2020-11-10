import React from "react";
import "../App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addItem } from "./actions";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  // getting hte state
  const list = useSelector((state) => state.list);
  console.log(list);
  const dispatch = useDispatch();
  return (
    <div>
      <input></input>
      <button onClick={() => dispatch(addItem())}>submit</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>{counter}</h1>
      {isLogged ? <h3>Valuable info shouldn't see</h3> : ""}
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
