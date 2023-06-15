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
          defaultValue={path[path.length - 1]}
          onChange={(e) => {
            updateFunction(path, e.target.value);
          }}
        />
      </div>
    );
  }
}
