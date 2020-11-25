import React, { Component } from "react";

export default class Tasks extends Component {
  render() {
    return (
      <div>
        <div className="task">
          {this.state.list.map((item) => {
            return (
              <>
                <p key={item.id} className="title_task">
                  {item.value}
                </p>
                <div className="checkbox_delete">
                  <input className="checkbox_title" type="checkbox" />
                  <button
                    onClick={() => this.deleteItem(item.id)}
                    className="delete_task"
                  >
                    &#10008;
                  </button>
                </div>
                <hr className="hr" />
              </>
            );
          })}
        </div>
        <button className="delete_all_btn">Clear</button>
      </div>
    );
  }
}
