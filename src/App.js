import React, { Component } from "react";
import updateObjectUsingPath from "./Utils/set";
import Input from "./Components/Input";
import Inputs from "./Components/Inputs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      education: [],
      work: [{}],
    };
  }
  // that updates any nested property inside the state with the provided value
  updateStateProperty = (path, value) => {
    this.setState((prevState) => updateObjectUsingPath(prevState, path, value));
    console.log(this.state);
  };
  newEducation = () => {
    this.state.education.push({});
  };

  newWork = () => {
    this.state.work.push({});
  };

  render() {
    return (
      <div>
        <Inputs updateFunction={this.updateStateProperty}></Inputs>
      </div>
    );
  }
}

export default App;
