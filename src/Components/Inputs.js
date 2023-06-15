import React, { Component } from "react";
import GeneralInfo from "./generalInfo";
import Education from "./Education";
import Work from "./Work";

export default class Inputs extends Component {
  render() {
    const { updateFunction } = this.props;
    return (
      <div className="inputs">
        <GeneralInfo updateFunction={updateFunction}></GeneralInfo>
        <Education></Education>
        <Work></Work>
      </div>
    );
  }
}
