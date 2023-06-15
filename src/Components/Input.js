import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { path, updateFunction } = this.props;
    return (
      <div className="input">
        <label htmlFor={path.join("-")}>{path[path.length - 1] + ": "}</label>
        <input
          id={path.join("-")}
          type="text"
          onChange={(e) => {
            updateFunction(path, e.target.value);
          }}
        />
      </div>
    );
  }
}
