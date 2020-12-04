import { Component } from "react";
import Search from "../Search/index";
import CreateTodo from "../createTodo/index";
import Tasks from "../Tasks/index";
import API from "../../utils/api";

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
    const statusFilter = [...statusDoneTask, ...statusInProgressTask];
    this.setState({
      tasks: statusFilter,
    });
  }
  async componentDidMount() {
    const data = await API.getTask();
    this.getStatusFilter(data);
  }
  searchHandler = async (search) => {
    this.setState({
      searchValue: search,
    });
  };
  renderTasks = (data) => {
    this.getStatusFilter(data);
  };
  render() {
    return (
      <>
        <Search searchHandler={this.searchHandler} />
        <CreateTodo renderTasks={this.renderTasks} />
        <Tasks
          renderTasks={this.renderTasks}
          search={this.state.tasks.filter((task) =>
            task.todoValue.toLowerCase().includes(this.state.searchValue)
          )}
        />
      </>
    );
  }
}
