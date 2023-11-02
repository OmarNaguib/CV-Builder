import { State } from "../../types";

export default function GeneralDisplay(props:{data:State}) {
  const { name, email, phoneNumber } = props.data;
  return (
    <div className="general-display">
      <div className="name-display">{name}</div>
      <div className="email-display">{email}</div>
      <div className="phone-display">{phoneNumber}</div>
    </div>
  );
}
