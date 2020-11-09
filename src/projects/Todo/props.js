import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [todoList, updateTodoList] = useState([]);
  return (
    <div className="container">
      <UserInput updateTodoList={updateTodoList} todoList={todoList} />
      <List todoList={todoList} updateTodoList={updateTodoList} />
    </div>
  );
}

// create component for the userinput
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
  // create a map of the element
  const listItems = todoList.map((item, i) => {
    console.log(i);
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
    <div>
      <li>{item}</li>
      <button onClick={() => deleteItem()}>Delete Button</button>
      <button>Update Button</button>
    </div>
  );
}

export default App;
