import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", list: [1, 2, 3, 4] };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    this.setState({ input: e.target.value });
  }
  handleSubmit(input) {
    const newList = this.state.list.slice();
    console.log(newList);
    newList.push(input);
    this.setState({ input, list: newList });
  }
  render() {
    return (
      <div className="container">
        <UserInput
          list={this.state.list}
          input={this.state.input}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
        <List list={this.state.list} />
      </div>
    );
  }
}

class UserInput extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <input onChange={(e) => this.props.handleInput(e)}></input>
        <button onClick={() => this.props.handleSubmit(this.props.input)}>
          Submit
        </button>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <div>
        <h1>List</h1>
      </div>
    );
  }
}

// create a listItem

export default App;
