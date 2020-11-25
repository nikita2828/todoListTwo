import React, { Component } from "react";

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      list: [],
    };
  }
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: "",
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.newItem}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
          className="search add_task"
          placeholder="add task"
          type="text"
        />
        <button onClick={() => this.addItem()} className="add_task_button">
          ADD
        </button>
      </div>
    );
  }
}
