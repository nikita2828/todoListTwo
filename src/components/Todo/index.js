import React, { Component } from "react";
import API from "../utils/index";
export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }
  async createTask() {
    const newTask = {
      id: "",
      todoValue: this.state.value,
      status: "inProgres",
    };
    await API.createTask(newTask);
    const data = await API.getTask();
    this.props.renderAfterAdd(data);
    this.setState({
      value: "",
    });
  }

  render() {
    return (
      <div className="todo_wrapper">
        <input
          onChange={(e) => this.setState({ value: e.target.value })}
          className="input_todo"
          type="text"
          value={this.state.value}
        />
        <button
          onClick={() => this.createTask()}
          disabled={!this.state.value.length}
          className="btn btn-primary btn_add_task"
        >
          ADD TASK
        </button>
      </div>
    );
  }
}
