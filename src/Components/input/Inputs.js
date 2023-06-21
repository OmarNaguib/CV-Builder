import React from "react";
import GeneralInfo from "./generalInfo";
import Education from "./Education";
import Work from "./Work";
import "../../styles/Inputs.css";

export default function Inputs(props) {
  const { updateFunction, state, newEducation, newWork } = props;
  return (
    <div className="inputs">
      <GeneralInfo updateFunction={updateFunction} data={state}></GeneralInfo>
      <Education
        data={state}
        updateFunction={updateFunction}
        newEducation={newEducation}
      ></Education>
      <Work
        data={state}
        updateFunction={updateFunction}
        newWork={newWork}
      ></Work>
    </div>
  );
}
