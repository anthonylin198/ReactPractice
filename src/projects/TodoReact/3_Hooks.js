/*


                App

   UserInput                List

                     Item Item Item Item


  State: React Hooks
  1) Hold array of list of items in the App component
  2) UserInput: Needs to hold state for text input, and needs the updateListItems prop drilled from App for onSubmit
  3) List: Prop drill down list of items, and update list of items, map out item component
  4) Item: Each item will have the value (from the list array), an input to update, (hold state) Delete button

*/

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
    updateTodoList([...todoList, input]);
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
