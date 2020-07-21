import React from "react";
import mac from "./assets/mac.png";
import "./assets/style.css";

const OneLike = () => {
  return (
    <div style={{ display: "inline" }} >
      <img src={mac} alt="Samurajski mac" style={{width: "20px", height: "20px"}} className="like" />
    </div>
  );
};

export default OneLike;
