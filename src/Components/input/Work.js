import React, { Component } from "react";
import Input from "./Input";
import uniqid from "uniqid";
import AreaInput from "./AreaInput";

export default class Work extends Component {
  render() {
    const { updateFunction, data, newWork } = this.props;
    const list = data.work.map((item, index) => {
      return (
        <li key={uniqid()}>
          <Input
            path={["work", index, "company"]}
            updateFunction={updateFunction}
            data={data}
          ></Input>
          <Input
            path={["work", index, "position"]}
            updateFunction={updateFunction}
            data={data}
          ></Input>
          <Input
            path={["work", index, "startingDate"]}
            updateFunction={updateFunction}
            data={data}
          ></Input>

          <Input
            path={["work", index, "finishDate"]}
            updateFunction={updateFunction}
            data={data}
          ></Input>
          <AreaInput
            path={["work", index, "jobDescription"]}
            updateFunction={updateFunction}
            data={data}
          ></AreaInput>
        </li>
      );
    });
    return (
      <div className="work">
        <h1>Work Experience</h1>
        <ul>{list}</ul>
        <button onClick={newWork}>+ Add Experience</button>
      </div>
    );
  }
}
