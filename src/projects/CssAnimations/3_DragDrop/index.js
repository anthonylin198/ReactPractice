import React, { useState } from "react";
import "./style.css";
// https://www.youtube.com/watch?v=aYZRRyukuIw

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Card from "./components/Card";

const App = () => {
  const [list, setList] = useState([
    ["item1", "item2", "item3", "item4"],
    [],
    ["item5"],
  ]);

  console.log(list);

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
            <Droppable droppableId="notStarted">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {list[0].map((item, index) => {
                    return (
                      <Draggable key={index} draggableId={item} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p>{item}</p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                </div>
              )}
            </Droppable>
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
