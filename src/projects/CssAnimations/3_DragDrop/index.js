import React, { useState } from "react";
import "./style.css";

import Card from "./components/Card";

// Drag and Drop
import { DnDProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const [list, setList] = useState([
    ["item1", "item2", "item3", "item4"],
    [],
    ["item5"],
  ]);

  console.log(list);

  const notStartedList = list[0].map((item, i) => {
    return <Card item={item} key={i} />;
  });
  const inProgressList = list[1].map((item, i) => {
    return <Card item={item} key={i} />;
  });
  const completedList = list[2].map((item, i) => {
    return <Card item={item} key={i} />;
  });
  return (
    <div className="container">
      {/* <DnDProvider backend={HTML5Backend}> */}
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
      {/* </DnDProvider> */}
    </div>
  );
};

export default App;
