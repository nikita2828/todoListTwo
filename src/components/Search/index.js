import React, { Component } from "react";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  searchItems = (e) => {
    const { value } = e.target;
    this.props.onSearch(value);
  };
  render() {
    return (
      <div>
        <input
          onChange={this.searchItems}
          placeholder="SEARCH"
          className="search"
          type="search"
        />
      </div>
    );
  }
}
