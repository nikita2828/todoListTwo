import React, { Component } from "react";
import classNames from "classnames";

export default class Tasks extends Component {
  render() {
    const { onDelete, executedItem, listSearch } = this.props;
    return (
      <div>
        <div className="task">
          {listSearch.map((item) => {
            return (
              <div key={item.id}>
                <p
                  className={classNames("title_task", {
                    executed_task: item.status === "done",
                  })}
                >
                  {item.value}
                </p>
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
                <hr
                  className={classNames("hr", {
                    executed_hr: item.status === "done",
                  })}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
