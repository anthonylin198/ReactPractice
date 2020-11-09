import React, { useState } from "react";
import "./App.css";

// we have an array of tasks to complete
const tasksList = [
  { title: 1, complete: false },
  { title: 2, complete: false },
  { title: 3, complete: false },
  { title: 4, complete: false },
  { title: 5, complete: false },
  { title: 6, complete: false },
  { title: 7, complete: false },
  { title: 8, complete: false },
  { title: 9, complete: false },
  { title: 10, complete: false },
  { title: 11, complete: false },
  { title: 12, complete: false },
];
// each "card" needs a button to mark as complete

const App = () => {
  // create hook to keep track of total tasks
  const [tasks, updateTasks] = useState(tasksList);
  return (
    <div className="container">
      <Summary tasks={tasks} />
      <h2>Cards Container</h2>
      <CardsContainer tasks={tasks} updateTasks={updateTasks} />
    </div>
  );
};

// component for the tasks complete
const Summary = ({ tasks }) => {
  function tasksComplete(tasks) {
    let counter = 0;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].complete) counter++;
    }
    return counter;
  }
  let completedTasks = tasksComplete(tasks);
  return (
    <div>
      <h1>Tasks Complete: {completedTasks}</h1>
      <h2>Total Tasks: {tasks.length}</h2>
      <h2>
        Tasks Complete: {((completedTasks / tasks.length) * 100).toFixed(2)} %
      </h2>
    </div>
  );
};

// component to store the cards
const CardsContainer = ({ tasks, updateTasks }) => {
  const taskArr = tasks.map((task, i) => {
    return (
      <Card
        task={task}
        tasks={tasks}
        indexNum={i}
        updateTasks={updateTasks}
        key={i}
      />
    );
  });
  return <div className="cardsContainer">{taskArr}</div>;
};

// Card Component
const Card = ({ task, indexNum, updateTasks, tasks }) => {
  let complete = "not complete";
  if (task.complete) {
    complete = "complete";
  }

  let buttonTitle = "Mark As Complete";
  if (task.complete) {
    buttonTitle = "Mark As Not Complete";
  }

  // function to update
  function updateTask() {
    const newUpdateTasks = tasks.slice();
    if (newUpdateTasks[indexNum].complete) {
      newUpdateTasks[indexNum].complete = false;
    } else {
      newUpdateTasks[indexNum].complete = true;
    }
    updateTasks(newUpdateTasks);
  }

  return (
    <div className="card">
      <h3>{task.title}</h3>
      <h3>Status: {complete}</h3>
      <button onClick={() => updateTask()}>{buttonTitle}</button>
    </div>
  );
};

export default App;
