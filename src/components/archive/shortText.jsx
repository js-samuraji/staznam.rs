import React from "react";
import { Link } from "react-router-dom";

export default function ShortText() {
  return (
    <div className="short-text">
      <div className="title">
        <Link to="/archive-text">
          <h3 className="headline">Naslov teksta</h3>
        </Link>
        <img src="/staznam.rs/img/logo/vectorpaint.png" alt="text-img" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        voluptatem voluptates quo nisi recusandae tenetur
      </p>
      <Link to="/archive-text">
        <p>Pročitaj vise...</p>
      </Link>
    </div>
  );
}
