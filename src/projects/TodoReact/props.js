import "./App.css";
import React, { useState } from "react";

function App() {
  const [todoList, updateTodoList] = useState([]);
  return (
    <div className="container">
      <UserInput updateTodoList={updateTodoList} todoList={todoList} />
      <List todoList={todoList} updateTodoList={updateTodoList} />
    </div>
  );
}

function UserInput({ updateTodoList, todoList }) {
  const [input, updateInput] = useState();
  function submit() {
    const newTodo = todoList.slice();
    newTodo.push(input);
    updateTodoList(newTodo);
  }

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} type="text"></input>
      <button onClick={(e) => submit()}>Submit</button>
    </div>
  );
}

// create component for the body
function List({ todoList, updateTodoList }) {
  const listItems = todoList.map((item, i) => {
    return (
      <ListItem
        item={item}
        itemNum={i}
        key={i}
        updateTodoList={updateTodoList}
        todoList={todoList}
      />
    );
  });
  return <div>{listItems}</div>;
}

function ListItem({ itemNum, item, updateTodoList, todoList }) {
  function deleteItem() {
    const newTodoList = todoList.slice();
    newTodoList.splice(itemNum, 1);
    updateTodoList(newTodoList);
  }

  return (
    <div className="itemContainer">
      <span className="item">{item}</span>
      <div className="buttonContainer">
        <button onClick={() => deleteItem()}>X</button>
        <button>Update</button>
      </div>
    </div>
  );
}

export default App;
