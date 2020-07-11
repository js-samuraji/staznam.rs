import React from "react";

const Field = ({ id, value, setValue }) => (
  <div
    id={id}
    style={{
      width: "100px",
      height: "100px",
      lineHeight: "100px",
      display: "inline-block",
      border: "1px solid black",
      fontSize: "50px",
      userSelect: "none"
    }}
    onClick={setValue}
  >
    {value ? value : " "}
  </div>
);

export default Field;
