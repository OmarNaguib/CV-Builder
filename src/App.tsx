import React, { useState } from "react";
import updateObjectUsingPath from "./Utils/set";
import Inputs from "./Components/input/Inputs";
import Display from "./Components/display/Display";
import "./styles/App.css";
import { State } from "./types";

function App() {
  const [state, setState] = useState<State>({
    name: "",
    email: "",
    phoneNumber: "",
    education: [],
    work: [],
  });
  // console.log("state:", state);
  // that updates any nested property inside the state with the provided value
  const updateStateProperty = (path: string[], value: string) => {
    setState((prevState: State): State => {
      console.log(prevState);
      return { ...updateObjectUsingPath(prevState, path, value) };
    });
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

  const buttonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const inputs = document.querySelector(".inputs");
    const display = document.querySelector(".display");
    const button = e.target as HTMLElement;

    if (display && inputs) {
      if (button.textContent === "Submit") {
        inputs.classList.add("hidden");
        display.classList.remove("hidden");
        button.textContent = "Edit";
      } else if (button.textContent === "Edit") {
        inputs.classList.remove("hidden");
        display.classList.add("hidden");
        button.textContent = "Submit";
      }
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
          data={state}
        ></Inputs>
        <Display data={state}></Display>
        <button onClick={buttonClick}>Submit</button>
      </div>
    </>
  );
}

export default App;
