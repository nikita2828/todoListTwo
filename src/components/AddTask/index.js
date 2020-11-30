import React, { Component } from "react";
import Tasks from "../Tasks/index";
import ExecutedTask from "../Executed/index";
import Search from "../Search/index";
export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      list: [],
      executed: [],
      search: "",
    };
  }

  addItem() {
    const newItem = {
      id: new Date().getTime(),
      value: this.state.inputValue,
    };

    this.setState({
      list: [...this.state.list, newItem],
      inputValue: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }
  deleteExecuted(id) {
    const list = [...this.state.executed];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ executed: updatedList });
  }
  executedItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
    const [aaa] = list.filter((item) => item.id === id);
    const executed = [...this.state.executed, aaa];
    this.setState({
      executed: executed,
    });
  }
  deleteAllItem() {
    this.setState({ list: [], executed: [] });
  }

  searchItems = (search) => {
    this.setState({
      search,
    });
  };
  render() {
    return (
      <div>
        <Search onSearch={this.searchItems} />
        <input
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
          className="search add_task"
          placeholder="add task"
          type="text"
        />
        <button
          onClick={() => this.addItem()}
          disabled={!this.state.inputValue.length}
          className="add_task_button"
        >
          ADD
        </button>
        <Tasks
          listSearch={this.state.list.filter((list) =>
            list.value.includes(this.state.search)
          )}
          onDelete={(id) => this.deleteItem(id)}
          executedItem={(id) => this.executedItem(id)}
        />
        <ExecutedTask
          executed={this.state.executed}
          onDelete={(id) => this.deleteExecuted(id)}
        />
        <button onClick={() => this.deleteAllItem()} className="delete_all_btn">
          Clear
        </button>
      </div>
    );
  }
}
