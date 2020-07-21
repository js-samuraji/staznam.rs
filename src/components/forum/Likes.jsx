import React, { useState } from "react";
import "./assets/style.css";
import OneLike from "./OneLike";

const Likes = () => {
  const [status, setStatus] = useState(0);

  return (
    <div>
      <p>Oceni poruku: </p>
      <OneLike onClick={() => setStatus(1)} />
      <OneLike onClick={() => setStatus(2)} />
      <OneLike onClick={() => setStatus(3)} />
      <OneLike onClick={() => setStatus(4)} />
      <OneLike onClick={() => setStatus(5)} />
      <div>Ocena: {status}</div>
    </div>
  );
};

export default Likes;
