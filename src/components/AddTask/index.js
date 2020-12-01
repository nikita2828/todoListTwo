import React, { Component } from "react";
import Tasks from "../Tasks/index";
import Search from "../Search/index";
const LIST_URL = "http://localhost:7777/list";
const onLoadTodo = () => fetch(LIST_URL).then((res) => res.json());

export default class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      list: [],
      search: "",
    };
  }

  async componentDidMount() {
    const data = await onLoadTodo();
    const withNotDone = data.filter((item) => item.status !== "done");
    const withDone = data.filter((item) => item.status === "done");
    const newData = [...withNotDone, ...withDone];
    this.setState({
      list: newData,
    });
  }

  async addItem() {
    const newItem = {
      id: new Date().getTime(),
      value: this.state.inputValue,
      status: "not done",
    };

    await fetch(LIST_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    const data = await onLoadTodo();
    this.setState({
      list: data,
      inputValue: "",
    });
  }

  async deleteItem(id) {
    await fetch(`${LIST_URL}/${id}`, {
      method: "DELETE",
    });
    const data = await onLoadTodo();
    this.setState({
      list: data,
      inputValue: "",
    });
  }

  async executedItem(id) {
    const list = [...this.state.list];
    const [deleteItem] = list.filter((item) => item.id === id);
    const putItem = {
      id: deleteItem.id,
      value: deleteItem.value,
      status: "done",
    };
    await fetch(`${LIST_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(putItem),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await onLoadTodo();
    const withNotDone = data.filter((item) => item.status !== "done");
    const withDone = data.filter((item) => item.status === "done");
    const newData = [...withNotDone, ...withDone];
    this.setState({
      list: newData,
    });
  }
  async deleteAllItem() {
    await fetch(LIST_URL, {
      method: "DELETE",
    });
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
        <button onClick={() => this.deleteAllItem()} className="delete_all_btn">
          Clear
        </button>
      </div>
    );
  }
}
