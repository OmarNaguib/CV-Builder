import React, { Component } from "react";

export default class WorkDisplay extends Component {
  render() {
    const { work } = this.props.data;
    const displayList = work.map((item) => {
      return (
        <li className="work-display-instance">
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
}
