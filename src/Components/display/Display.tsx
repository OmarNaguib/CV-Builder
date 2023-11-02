import React from "react";
import GeneralDisplay from "./GeneralDisplay";
import EducationDisplay from "./EducationDisplay";
import WorkDisplay from "./WorkDisplay";
import "../../styles/Display.css";

export default function Display(props) {
  return (
    <div className="display hidden">
      <GeneralDisplay data={props.data}></GeneralDisplay>
      <EducationDisplay data={props.data}></EducationDisplay>
      <WorkDisplay data={props.data}></WorkDisplay>
    </div>
  );
}
