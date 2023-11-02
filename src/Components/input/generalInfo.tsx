import Input from "./Input";
import { State } from "../../types";

export default function GeneralInfo(props: GeneralInfoProps) {
  const { updateFunction, data } = props;
  return (
    <div className="general-info">
      <h1>General Info</h1>
      <div className="info">
        <Input
          path={["name"]}
          updateFunction={updateFunction}
          data={data}
        ></Input>
        <Input
          path={["email"]}
          updateFunction={updateFunction}
          data={data}
        ></Input>
        <Input
          path={["phoneNumber"]}
          updateFunction={updateFunction}
          data={data}
        ></Input>
      </div>
    </div>
  );
}

type GeneralInfoProps = {
  updateFunction: (path: string[], value: string) => void;
  data: State;
};
