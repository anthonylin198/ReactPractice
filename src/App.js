import "./App.css";

import Menu from "./components/menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TodoList from "./pages/TodoList";
import Quiz from "./pages/TodoList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu />

        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="quiz" exact component={Quiz} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
