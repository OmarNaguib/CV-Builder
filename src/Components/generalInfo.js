import React, { Component } from "react";
import Input from "./Input";

export default class GeneralInfo extends Component {
  render() {
    const { updateFunction } = this.props;
    return (
      <div className="inputs">
        <div className="general-info">
          <Input path={["name"]} updateFunction={updateFunction}></Input>
          <Input path={["email"]} updateFunction={updateFunction}></Input>
          <Input path={["phoneNumber"]} updateFunction={updateFunction}></Input>
        </div>
      </div>
    );
  }
}
