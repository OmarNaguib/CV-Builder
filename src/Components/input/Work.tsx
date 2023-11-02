import Input from "./Input";
import AreaInput from "./AreaInput";
import { State } from "../../types";

export default function Work(props: WorkProps) {
  const { updateFunction, data, newWork } = props;
  const list = data.work.map((_item, index) => {
    const stringIndex = "" + index;
    return (
      <li key={"work" + index}>
        <div className="work-instance">
          <Input
            path={["work", stringIndex, "company"]}
            updateFunction={updateFunction}
            data={data}
          ></Input>
          <Input
            path={["work", stringIndex, "position"]}
            updateFunction={updateFunction}
            data={data}
          ></Input>
          <Input
            path={["work", stringIndex, "startingDate"]}
            updateFunction={updateFunction}
            data={data}
          ></Input>
          <Input
            path={["work", stringIndex, "finishDate"]}
            updateFunction={updateFunction}
            data={data}
          ></Input>
          <AreaInput
            path={["work", stringIndex, "jobDescription"]}
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

type WorkProps = {
  updateFunction: (path: string[], value: string) => void;
  data: State;
  newWork: () => number;
};
