import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", list: [] };
    this.handleSubmit = this.handleSubmit.bind(this); // need to bind when drilling
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleSubmit(input) {
    const newList = this.state.list.slice();
    newList.push(input);
    this.setState({ input, list: newList });
  }
  handleDelete(index) {
    const newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({ list: newList });
  }
  handleUpdate(index, input) {
    const newList = this.state.list.slice();
    newList[index] = input;
    this.setState({ list: newList });
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
        <List
          list={this.state.list}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  handleInput(e) {
    console.log(this.state);
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <div>
        <input onChange={(e) => this.handleInput(e)}></input>
        <button onClick={() => this.props.handleSubmit(this.state.input)}>
          Submit
        </button>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    const listArr = this.props.list.map((item, i) => {
      return (
        <ListItem
          item={item}
          index={i}
          key={i}
          handleDelete={this.props.handleDelete}
          handleUpdate={this.props.handleUpdate}
        />
      );
    });
    return <div>{listArr}</div>;
  }
}

// create a listItem
class ListItem extends React.Component {
  // keep local state for the input
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  render() {
    return (
      <div className="itemContainer">
        <span className="item">{this.props.item}</span>
        <div className="buttonContainer">
          <input
            onChange={(e) => this.setState({ input: e.target.value })}
          ></input>
          <button
            onClick={() =>
              this.props.handleUpdate(this.props.index, this.state.input)
            }
          >
            Update
          </button>
          <button onClick={() => this.props.handleDelete(this.props.index)}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default App;
