import React, { useState } from "react";
import "./style.css";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Card from "./components/Card";
import { ProvidedRequiredArgumentsOnDirectivesRule } from "graphql/validation/rules/ProvidedRequiredArgumentsRule";

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
    <DragDropContext>
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
    </DragDropContext>
  );
};

export default App;
