import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TodoList from "./pages/TodoList";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/quiz" exact component={Quiz} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
