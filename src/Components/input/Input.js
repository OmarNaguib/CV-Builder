import React, { Component } from "react";
import get from "../../Utils/get";

export default class Input extends Component {
  render() {
    const { path, updateFunction, data } = this.props;
    const value = get(data, path);
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
          onBlur={(e) => {
            e.preventDefault();
            updateFunction(path, e.target.value);
          }}
          defaultValue={value}
        />
      </div>
    );
  }
}
