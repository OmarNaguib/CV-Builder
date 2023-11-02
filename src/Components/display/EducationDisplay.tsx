import uniqid from "uniqid";
import { State, Education } from "../../types";

export default function EducationDisplay(props: { data: State }) {
  const { education } = props.data;
  const displayList = education.map((item: Education) => {
    return (
      <li className="education-display-instance" key={uniqid()}>
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
