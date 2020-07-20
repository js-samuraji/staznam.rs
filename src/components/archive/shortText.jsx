import React from "react";
import { Link } from "react-router-dom";

export default function ShortText() {
  return (
    <div className="short-text">
      <Link to="/archive-text">
        <div className="title">
          <h3 className="headline">Naslov teksta</h3>
          <img src="/staznam.rs/img/logo/vectorpaint.png" alt="text-img" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          voluptatem voluptates quo nisi recusandae tenetur
        </p>
      </Link>
    </div>
  );
}
