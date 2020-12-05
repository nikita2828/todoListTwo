import React, { Component } from "react";
import API from "../../utils/api";
export default class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      taskValue: "",
    };
  }
  createTask = async () => {
    await API.createTask({
      todoValue: this.state.taskValue,
      status: API.inProgres,
    });
    const data = await API.getTask();
    this.props.renderTasks(data);
    this.setState({
      taskValue: "",
    });
  };

  render() {
    return (
      <div className="todo_wrapper">
        <input
          onChange={(e) => this.setState({ taskValue: e.target.value })}
          className="input_todo"
          type="text"
          value={this.state.taskValue}
        />
        <button
          onClick={this.createTask}
          disabled={!this.state.taskValue.length}
          className="btn btn-primary btn_add_task"
        >
          ADD TASK
        </button>
      </div>
    );
  }
}
