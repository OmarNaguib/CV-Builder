import GeneralDisplay from "./GeneralDisplay";
import EducationDisplay from "./EducationDisplay";
import WorkDisplay from "./WorkDisplay";
import "../../styles/Display.css";
import { State } from "../../types";

export default function Display(props:{data:State}) {
  return (
    <div className="display hidden">
      <GeneralDisplay data={props.data}></GeneralDisplay>
      <EducationDisplay data={props.data}></EducationDisplay>
      <WorkDisplay data={props.data}></WorkDisplay>
    </div>
  );
}
