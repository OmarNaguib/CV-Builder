import get from "../../Utils/get";
import { State } from "../../types";

export default function Input(props: InputProps) {
  const { path, updateFunction, data } = props;
  const value = get(data, path);
  const label = path[path.length - 1]
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div className="input">
      <label htmlFor={path.join("-")}>{label + ": "}</label>
      <input
        id={path.join("-")}
        type="text"
        onChange={(e) => {
          updateFunction(path, e.target.value);
        }}
        defaultValue={value}
      />
    </div>
  );
}

type InputProps = {
  path: string[];
  updateFunction: (path: string[], value: string) => void;
  data: State;
};
