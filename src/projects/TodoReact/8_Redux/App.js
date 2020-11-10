import React, { useState } from "react";
import "../App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./actions";

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
  const isLogged = useSelector((state) => state.isLogged);

  const [input, updateInput] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)}></input>
      <button onClick={() => dispatch(addItem(input))}>submit</button>
    </div>
  );
};

function List() {
  const listItems = useSelector((state) => state.list);

  const listArr = listItems.map((item, i) => {
    return <ListItem item={item} key={i} />;
  });
  return <div>{listArr}</div>;
}

function ListItem({ item }) {
  return (
    <div className="itemContainer">
      <span className="item">{item}</span>
      <div>
        <input></input>
        <button>Update</button>
        <button>X</button>
      </div>
    </div>
  );
}

export default App;
