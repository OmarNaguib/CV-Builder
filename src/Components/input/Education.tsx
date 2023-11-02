import Input from "./Input";
import { State } from "../../types";

export default function education(props: EducationProps) {
  const { updateFunction, data, newEducation } = props;
  const list = data.education.map((_item, index) => {
    const stringIndex = "" + index;
    return (
      <li key={"education" + index}>
        <div className="education-instance">
          <Input
            path={["education", stringIndex, "schoolName"]}
            updateFunction={updateFunction}
            data={data}
          ></Input>
          <Input
            path={["education", stringIndex, "studyType"]}
            updateFunction={updateFunction}
            data={data}
          ></Input>
          <Input
            path={["education", stringIndex, "finishDate"]}
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

type EducationProps = {
  updateFunction: (path: string[], value: string) => void;
  data: State;
  newEducation: () => number;
};
