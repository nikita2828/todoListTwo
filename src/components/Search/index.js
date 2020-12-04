import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="search_wrapper">
        <input
          onChange={(e) =>
            this.props.searchHandler(e.target.value.toLowerCase())
          }
          className="input_search"
          type="text"
        />
      </div>
    );
  }
}
