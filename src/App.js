import React, { useState } from "react";
import updateObjectUsingPath from "./Utils/set";
import Inputs from "./Components/input/Inputs";
import Display from "./Components/display/Display";
import "./styles/App.css";

function App(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    education: [],
    work: [],
  });
  // console.log("state:", state);
  // that updates any nested property inside the state with the provided value
  const updateStateProperty = (path, value) => {
    setState((prevState) => {
      return { ...updateObjectUsingPath(prevState, path, value) };
    });
    console.log("state update", state);
  };
  const newEducation = () => {
    setState((prevState) => {
      return {
        ...prevState,
        education: prevState.education.concat({
          schoolName: "",
          studyType: "",
          finishDate: "",
        }),
      };
    });
    return state.education.length;
  };

  const newWork = () => {
    setState((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        work: prevState.work.concat({
          company: "",
          position: "",
          startingDate: "",
          finishDate: "",
          jobDescription: "",
        }),
      };
    });
    return state.work.length;
  };

  const buttonClick = (e) => {
    const inputs = document.querySelector(".inputs");

    const display = document.querySelector(".display");
    if (e.target.textContent === "Submit") {
      inputs.classList.add("hidden");
      display.classList.remove("hidden");
      e.target.textContent = "Edit";
    } else if (e.target.textContent === "Edit") {
      inputs.classList.remove("hidden");
      display.classList.add("hidden");
      e.target.textContent = "Submit";
    }
  };

  return (
    <>
      <header>CV Builder</header>
      <div className="app">
        <Inputs
          updateFunction={updateStateProperty}
          newWork={newWork}
          newEducation={newEducation}
          state={state}
        ></Inputs>
        <Display data={state}></Display>
        <button onClick={buttonClick}>Submit</button>
      </div>
    </>
  );
}

export default App;
