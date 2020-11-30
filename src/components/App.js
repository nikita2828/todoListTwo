import { Component } from "react";
import AddTask from "./AddTask/index";
export default class App extends Component {
  render() {
    return (
      <div className="wrapperApp">
        <AddTask />
      </div>
    );
  }
}
