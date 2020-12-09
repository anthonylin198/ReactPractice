import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [list, setList] = useState([
    ["item1", "item2", "item3", "item4"],
    [],
    ["item5"],
  ]);

  console.log(list);

  const notStartedList = list[0].map((item, i) => {
    return <div key={i}>{item}</div>;
  });
  const inProgressList = list[1].map((item, i) => {
    return <div key={i}>{item}</div>;
  });
  const completedList = list[2].map((item, i) => {
    return <div key={i}>{item}</div>;
  });
  return (
    <div className="container">
      <div className="boxesContainer">
        <div className="BoxContainer">
          <h1>Not Started</h1>
          <div>{notStartedList}</div>
        </div>
        <div className="BoxContainer">
          <h1>In Progress</h1>
          <div>{inProgressList}</div>
        </div>
        <div className="BoxContainer">
          <h1>Completed</h1>
          <div>{completedList}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
