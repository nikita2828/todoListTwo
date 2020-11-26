import React, { Component } from "react";
import Tasks from "./tasks";

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      list: [],
    };
  }

  updateInputValue(value) {
    this.setState({ inputValue: value });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.inputValue,
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      inputValue: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }
  deleteAllItem() {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => (item = ""));
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(e) => this.updateInputValue(e.target.value)}
          className="search add_task"
          placeholder="add task"
          type="text"
        />
        <button
          onClick={() => this.addItem()}
          disabled={!this.state.inputValue.length}
          className="add_task_button"
        >
          ADD
        </button>
        <Tasks list={this.state.list} onDelete={(id) => this.deleteItem(id)} />
        <button onClick={() => this.deleteAllItem()} className="delete_all_btn">
          Clear
        </button>
      </div>
    );
  }
}
