import React from "react";
import mac from "../assets/mac.png";
import "../assets/style.css";

const Likes = () => {
  return (
    <div style={{ display: "inlineBlock" }}>
      <p>Oceni ovu poruku: </p>
      <div>
        <img
          src={mac}
          alt="Slika maca"
          style={{ width: "20px", height: "20px" }}
          className="like"
        />
        <img
          src={mac}
          alt="Slika maca"
          style={{ width: "20px", height: "20px" }}
          className="like"
        />
        <img
          src={mac}
          alt="Slika maca"
          style={{ width: "20px", height: "20px" }}
          className="like"
        />
        <img
          src={mac}
          alt="Slika maca"
          style={{ width: "20px", height: "20px" }}
          className="like"
        />
        <img
          src={mac}
          alt="Slika maca"
          style={{ width: "20px", height: "20px" }}
          className="like"
        />
      </div>
    </div>
  );
};

export default Likes;
