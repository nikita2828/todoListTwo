import React, { Component } from "react";
import API from "../../utils/api";
import classNames from "classnames";
export default class Tasks extends Component {
 async getAndRender(){
    const data = await API.getTask();
    this.props.renderTasks(data);
  }
  async deleteTask(id) {
    await API.deleteTask(id);
    this.getAndRender();
  }

  async doneTask(task) {
    await API.changeTask({
      ...task,
      status: API.done,
    });
    this.getAndRender();
  }
  render() {
    const {tasks} = this.props;
    return (
      <div className="tasks">
        {tasks.reverse().map((task) => {
          return (
            <div
              key={task.id}
              className={classNames("task", {
                done_wrapper: task.status === API.done,
              })}
            >
              <p
                className={classNames("task_item", {
                  done_task: task.status === API.done,
                })}
              >
                {task.todoValue}
              </p>
              <button
                onClick={() => this.deleteTask(task.id)}
                className="btn btn-danger btn_delete_task"
              >
                delete
              </button>
              <button
                onClick={() => {
                  this.doneTask(task);
                }}
                className={classNames("btn btn-primary btn_done_task", {
                  btn_done_click: task.status === API.done,
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
