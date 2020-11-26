import React, { Component } from "react";

export default class Tasks extends Component {
  render() {
    const { list, onDelete } = this.props;
    return (
      <div>
        <div className="task">
          {list.map((item) => {
            return (
              <div key={item.id}>
                <p className="title_task">{item.value}</p>
                <div className="checkbox_delete">
                  <input className="checkbox_title" type="checkbox" />
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
