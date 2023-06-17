import React, { Component } from "react";
import Input from "./Input";
import uniqid from "uniqid";

export default class Education extends Component {
  render() {
    const { updateFunction, data, newEducation } = this.props;
    const list = data.education.map((item, index) => {
      return (
        <li key={uniqid()}>
          <div className="education-instance">
            <Input
              path={["education", index, "schoolName"]}
              updateFunction={updateFunction}
              data={data}
            ></Input>
            <Input
              path={["education", index, "studyType"]}
              updateFunction={updateFunction}
              data={data}
            ></Input>
            <Input
              path={["education", index, "finishDate"]}
              updateFunction={updateFunction}
              data={data}
            ></Input>
          </div>
        </li>
      );
    });
    return (
      <div className="education">
        <h1>Education</h1>
        <ul>{list}</ul>
        <button onClick={newEducation}>+ Add degree</button>
      </div>
    );
  }
}
