import { Component } from "react";
import Search from "../Search/index";
import Todo from "../Todo/index";
import Tasks from "../Tasks/index";
import API from "../utils/index";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      searchValue: "",
    };
  }
  getStatusFilter(data) {
    const statusInProgressTask = data.filter(
      (task) => task.status === "inProgres"
    );
    const statusDoneTask = data.filter((task) => task.status === "done");
    const statusFilter = [...statusInProgressTask, ...statusDoneTask];
    this.setState({
      tasks: statusFilter,
    });
  }
  async componentDidMount() {
    const data = await API.getTask();
    this.getStatusFilter(data);
  }
  renderAfterAdd = (data) => {
    this.getStatusFilter(data);
  };
  renderAfterDelete = (data) => {
    this.getStatusFilter(data);
  };
  search = async (search) => {
    this.setState({
      searchValue: search,
    });
  };
  renderAfterDone = (data) => {
    this.getStatusFilter(data);
  };
  render() {
    return (
      <>
        <Search search={this.search} />
        <Todo renderAfterAdd={this.renderAfterAdd} />
        <Tasks
          renderAfterDone={this.renderAfterDone}
          renderAfterDelete={this.renderAfterDelete}
          search={this.state.tasks.filter((task) =>
            task.todoValue.includes(this.state.searchValue)
          )}
        />
      </>
    );
  }
}
