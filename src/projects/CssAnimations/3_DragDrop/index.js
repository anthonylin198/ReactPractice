import React from "react";
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <div className="boxesContainer">
        <div className="BoxContainer">Not Completed</div>
        <div className="BoxContainer">In Progress</div>
        <div className="BoxContainer">Completed</div>
      </div>
    </div>
  );
};

export default App;
