import React from "react";
import GeneralInfo from "./generalInfo";
import Education from "./Education";
import Work from "./Work";
import "../../styles/Inputs.css";
import { State } from "../../types";

export default function Inputs(props: InputsProps) {
  const { updateFunction, data, newEducation, newWork } = props;
  return (
    <div className="inputs">
      <GeneralInfo updateFunction={updateFunction} data={data}></GeneralInfo>
      <Education
        data={data}
        updateFunction={updateFunction}
        newEducation={newEducation}
      ></Education>
      <Work
        data={data}
        updateFunction={updateFunction}
        newWork={newWork}
      ></Work>
    </div>
  );
}

type InputsProps = {
  updateFunction: (path: string[], value: string) => void;
  data: State;
  newEducation: () => number;
  newWork: () => number;
};
