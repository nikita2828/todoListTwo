import { Component } from "react";
import AddTask from "./Components/addTaskComponent";
import Search from "./Components/searchComponent";
import Tasks from "./Components/tasks";
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="wrapperApp">
        <Search />
        <AddTask />
        <Tasks />
      </div>
    );
  }
}
