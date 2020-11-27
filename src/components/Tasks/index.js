import React, { Component } from "react";

export default class Tasks extends Component {
  render() {
    const { list, onDelete, executedItem } = this.props;
    return (
      <div>
        <div className="task">
          {list.map((item) => {
            return (
              <div key={item.id}>
                <p className="title_task">{item.value}</p>
                <div className="checkbox_delete">
                  <button
                    onClick={() => executedItem(item.id)}
                    className="delete_task"
                  >
                    &#10004;
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="delete_task"
                  >
                    &#10008;
                  </button>
                </div>
                <hr className="hr" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
