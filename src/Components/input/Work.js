import React from "react";
import Input from "./Input";
import uniqid from "uniqid";
import AreaInput from "./AreaInput";

export default function Work(props) {
  const { updateFunction, data, newWork } = props;
  const list = data.work.map((item, index) => {
    return (
      <li key={uniqid()}>
        <div className="work-instance">
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
        </div>
      </li>
    );
  });
  return (
    <div className="work">
      <h1>Work Experience</h1>
      <ol>{list}</ol>
      <button onClick={newWork}>+ Add Experience</button>
    </div>
  );
}
