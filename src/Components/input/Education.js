import React from "react";
import Input from "./Input";

export default function education(props) {
  const { updateFunction, data, newEducation } = props;
  const list = data.education.map((item, index) => {
    return (
      <li key={"education" + index}>
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
