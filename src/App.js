import { Component } from "react";
import AddTask from "./components/AddTask/index";
import Search from "./components/Search/index";
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
