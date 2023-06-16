import React, { Component } from "react";
import GeneralInfo from "./generalInfo";
import Education from "./Education";
import Work from "./Work";

export default class Inputs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { updateFunction, state, newEducation, newWork } = this.props;
    return (
      <div className="inputs">
        <GeneralInfo updateFunction={updateFunction}></GeneralInfo>
        <Education
          data={state.education}
          updateFunction={updateFunction}
          newEducation={newEducation}
        ></Education>
        <Work
          data={state.work}
          updateFunction={updateFunction}
          newWork={newWork}
        ></Work>
      </div>
    );
  }
}
