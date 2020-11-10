import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [1, 2, 3, 4] };
  }
  render() {
    return (
      <div className="container">
        <UserInput />
        <List list={this.state.list} />
      </div>
    );
  }
}

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { input: "" };
  }
  // create function to handle typing
  handleInput(e) {
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>User Input</h1>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    console.log(this.props.list);
    return (
      <div>
        <h1>List</h1>
      </div>
    );
  }
}

export default App;
