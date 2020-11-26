import { Component } from "react";
import AddTask from "./Components/addTaskComponent";
import Search from "./Components/searchComponent";
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
      </div>
    );
  }
}
