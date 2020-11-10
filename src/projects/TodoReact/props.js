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
  const [input, updateInput] = useState("");
  function submit() {
    const newTodo = todoList.slice();
    newTodo.push(input);
    updateTodoList(newTodo);
    updateInput("");
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => updateInput(e.target.value)}
        type="text"
      ></input>
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
  const [itemChange, updateItemChange] = useState("");
  console.log(itemChange);

  function deleteItem() {
    const newTodoList = todoList.slice();
    newTodoList.splice(itemNum, 1);
    updateTodoList(newTodoList);
  }
  function updateItem() {
    const newTodoList = todoList.slice();
    newTodoList[itemNum] = itemChange;
    updateTodoList(newTodoList);
    updateItemChange("");
  }

  return (
    <div className="itemContainer">
      <span className="item">{item}</span>
      <div className="buttonContainer">
        <input
          value={itemChange}
          onChange={(e) => updateItemChange(e.target.value)}
        ></input>
        <button onClick={() => updateItem()}>Update</button>
        <button onClick={() => deleteItem()}>X</button>
      </div>
    </div>
  );
}

export default App;
