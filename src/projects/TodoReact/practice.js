import react, { useState } from "react";
import "./App.css";

function App() {
  // Keep state in an array
  const [list, updateList] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="container">
      <h1>Parent Component</h1>
      <UserInput />
      <List list={list} />
    </div>
  );
}

// create user Input
function UserInput() {
  return (
    <div>
      <input></input>
      <button>submit</button>
    </div>
  );
}

// create List
function List({ list }) {
  const listArr = list.map((item, i) => {
    return <div key={i}>{item}</div>;
  });
  return <div>{listArr}</div>;
}

export default App;
