import React from "react";
import uniqid from "uniqid";

export default function WorkDisplay(props) {
  const { work } = props.data;
  const displayList = work.map((item) => {
    return (
      <li className="work-display-instance" key={uniqid()}>
        <div className="company">{"• " + item.company}</div>
        <div className="position">{"- " + item.position}</div>
        <div className="dates">
          {item.startingDate + " - " + item.finishDate}
        </div>
        <div className="job-description">{item.jobDescription}</div>
      </li>
    );
  });
  return (
    <div className="work-display">
      <h2>Work</h2>
      <ul>{displayList}</ul>
    </div>
  );
}
