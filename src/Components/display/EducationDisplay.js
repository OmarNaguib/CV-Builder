import React, { Component } from "react";

export default class EducationDisplay extends Component {
  render() {
    const { education } = this.props.data;
    const displayList = education.map((item) => {
      return (
        <li className="education-display-instance">
          <div className="school-name">{"• " + item.schoolName}</div>
          <div className="study-type">{item.studyType}</div>
          <div className="finish-date">{item.finishDate}</div>
        </li>
      );
    });
    return (
      <div className="education-display">
        <h2>Education</h2>
        <ul>{displayList}</ul>
      </div>
    );
  }
}
