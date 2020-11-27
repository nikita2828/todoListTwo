import React, { Component } from "react";

export default class ExecutedTask extends Component {
  render() {
    const { executed, onDelete } = this.props;
    return (
      <div>
        <div className="task">
          {executed.map((item) => {
            return (
              <div key={item.id}>
                <p className="title_task executed_task">
                  <strike>{item.value}</strike>
                </p>
                <div className="checkbox_delete">
                  <button
                    onClick={() => onDelete(item.id)}
                    className="delete_task"
                  >
                    &#10008;
                  </button>
                </div>
                <hr className="hr executed_hr" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
