import { Component } from "react";
import AddTask from "./components/AddTask/index";
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="wrapperApp">
        <AddTask />
      </div>
    );
  }
}
