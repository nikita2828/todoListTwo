import React, { Component } from "react";
import API from "../utils/index";
import classNames from "classnames";
export default class Tasks extends Component {
  async deleteTask(id) {
    await API.deleteTask(id);
    const data = await API.getTask();
    this.props.renderAfterDelete(data);
  }

  async doneTask(task) {
    const changeTask = {
      id: task.id,
      todoValue: task.todoValue,
      status: "done",
    };
    await API.changeTask(changeTask);
    const data = await API.getTask();
    this.props.renderAfterDone(data);
  }
  render() {
    return (
      <div className="tasks">
        {this.props.search.map((task) => {
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
