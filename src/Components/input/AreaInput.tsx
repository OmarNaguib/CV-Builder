import get from "../../Utils/get";
import { State } from "../../types";

export default function AreaInput(props: InputProps) {
  const { path, updateFunction, data } = props;
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
        onBlur={(e) => {
          updateFunction(path, e.target.value);
        }}
        defaultValue={value}
      ></textarea>
    </div>
  );
}

type InputProps = {
  path: string[];
  updateFunction: (path: string[], value: string) => void;
  data: State;
};
