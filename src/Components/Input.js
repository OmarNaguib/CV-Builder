import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { path, updateFunction } = this.props;
    const label = path[path.length - 1]
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return (
      <div className="input">
        <label htmlFor={path.join("-")}>{label + ": "}</label>
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
