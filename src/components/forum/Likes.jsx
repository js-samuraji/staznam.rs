import React from "react";
import "./assets/style.css";
import OneLike from "./OneLike";

const Likes = () => {
  return (
    <div >
      <p>Oceni poruku: </p>
      <OneLike/>
      <OneLike/>
      <OneLike/>
      <OneLike/>
      <OneLike/>
    </div>
  );
};

export default Likes;
