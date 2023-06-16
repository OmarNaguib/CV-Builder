import React, { Component } from "react";

export default class AreaInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { path, updateFunction } = this.props;
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
          defaultValue={this.props.value}
        ></textarea>
      </div>
    );
  }
}
