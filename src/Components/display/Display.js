import React, { Component } from "react";
import GeneralDisplay from "./GeneralDisplay";
import EducationDisplay from "./EducationDisplay";
import "../../styles/Display.css";

export default class Display extends Component {
  render() {
    return (
      <div className="display">
        <GeneralDisplay data={this.props.data}></GeneralDisplay>
        <EducationDisplay data={this.props.data}></EducationDisplay>
      </div>
    );
  }
}
