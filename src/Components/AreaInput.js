import React, { Component } from "react";
import get from "../Utils/get";

export default class AreaInput extends Component {
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
        <textarea
          id={path.join("-")}
          cols="30"
          rows="10"
          onBlur={(e) => {
            e.preventDefault();
            updateFunction(path, e.target.value);
          }}
          defaultValue={value}
        ></textarea>
      </div>
    );
  }
}
