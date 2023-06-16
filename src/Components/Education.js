import React, { Component } from "react";
import Input from "./Input";
import uniqid from "uniqid";

export default class Education extends Component {
  render() {
    const { updateFunction, data, newEducation } = this.props;
    const list = data.map((item, index) => {
      return (
        <li key={uniqid()}>
          <Input
            path={["education", index, "schoolName"]}
            updateFunction={updateFunction}
          ></Input>
          <Input
            path={["education", index, "studyType"]}
            updateFunction={updateFunction}
          ></Input>
          <Input
            path={["education", index, "finishDate"]}
            updateFunction={updateFunction}
          ></Input>
        </li>
      );
    });
    return (
      <div className="education">
        <h1>Education</h1>
        <ul>{list}</ul>
        <button onClick={newEducation}>new+</button>
      </div>
    );
  }
}
