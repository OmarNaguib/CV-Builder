import React, { Component } from "react";
import updateObjectUsingPath from "./Utils/set";
import Inputs from "./Components/input/Inputs";
import Display from "./Components/display/Display";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      education: [],
      work: [],
    };
  }
  // that updates any nested property inside the state with the provided value
  updateStateProperty = (path, value) => {
    this.setState((prevState) => updateObjectUsingPath(prevState, path, value));
    console.log(this.state);
  };
  newEducation = () => {
    this.setState((prevState) => {
      return {
        education: prevState.education.concat({
          schoolName: "",
          studyType: "",
          finishDate: "",
        }),
      };
    });
    return this.state.education.length;
  };

  newWork = () => {
    this.setState((prevState) => {
      return {
        work: prevState.work.concat({}),
      };
    });
    return this.state.work.length;
  };

  render() {
    return (
      <div className="app">
        <Inputs
          updateFunction={this.updateStateProperty}
          newWork={this.newWork}
          newEducation={this.newEducation}
          state={this.state}
        ></Inputs>
        <Display data={this.state}></Display>
      </div>
    );
  }
}

export default App;
