import React from "react";
import Input from "./Input";

export default function GeneralInfo(props) {
  const { updateFunction, data } = props;
  return (
    <div className="general-info">
      <h1>General Info</h1>
      <div className="info">
        <Input
          path={["name"]}
          updateFunction={updateFunction}
          data={data}
        ></Input>
        <Input
          path={["email"]}
          updateFunction={updateFunction}
          data={data}
        ></Input>
        <Input
          path={["phoneNumber"]}
          updateFunction={updateFunction}
          data={data}
        ></Input>
      </div>
    </div>
  );
}
