import React, { Component } from "react";
import API from "../../utils/api";
import classNames from "classnames";
export default class Tasks extends Component {
  async deleteTask(id) {
    await API.deleteTask(id);
    const data = await API.getTask();
    this.props.renderTasks(data);
  }

  async doneTask(task) {
    await API.changeTask({
      ...task,
      status: "done",
    });
    const data = await API.getTask();
    this.props.renderTasks(data);
  }
  render() {
    return (
      <div className="tasks">
        {this.props.search.reverse().map((task) => {
          return (
            <div
              key={task.id}
              className={classNames("task", {
                done_wrapper: task.status === "done",
              })}
            >
              <p
                className={classNames("task_item", {
                  done_task: task.status === "done",
                })}
              >
                {task.todoValue}
              </p>
              <button
                onClick={() => {
                  this.deleteTask(task.id);
                }}
                className="btn btn-danger btn_delete_task"
              >
                delete
              </button>
              <button
                onClick={() => {
                  this.doneTask(task);
                }}
                className={classNames("btn btn-primary btn_done_task", {
                  btn_done_click: task.status === "done",
                })}
              >
                done
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
