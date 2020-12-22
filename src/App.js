import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TodoList from "./pages/TodoList";
import Quiz from "./pages/Quiz";
import Components from "./pages/Components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

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
