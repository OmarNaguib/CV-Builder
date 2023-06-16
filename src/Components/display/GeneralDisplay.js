import React, { Component } from "react";

export default class GeneralDisplay extends Component {
  render() {
    const { name, email, phoneNumber } = this.props.data;
    return (
      <div className="general-display">
        <div className="name-display">{name}</div>
        <div className="email-display">{email}</div>
        <div className="phone-display">{phoneNumber}</div>
      </div>
    );
  }
}
