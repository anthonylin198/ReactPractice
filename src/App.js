import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TodoList from "./pages/TodoList";
import Quiz from "./pages/Quiz";
import Components from "./pages/Components";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
      <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar setIsOpen={setIsOpen} toggle={toggle} />

        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/quiz" exact component={Quiz} />
          <Route path="/components" exact component={Components} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
