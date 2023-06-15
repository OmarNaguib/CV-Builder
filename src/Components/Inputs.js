import React, { Component } from "react";
import Input from "./Input";

export default class Inputs extends Component {
  render() {
    const { updateFunction } = this.props;
    return (
      <div className="inputs">
        <Input path={["name"]} updateFunction={updateFunction}></Input>
        <Input path={["email"]} updateFunction={updateFunction}></Input>
        <Input path={["phoneNumber"]} updateFunction={updateFunction}></Input>
      </div>
    );
  }
}
