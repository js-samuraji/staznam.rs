import React from "react";
import "./archive.css";
import TextList from "./TextList";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Archive() {
  return (
    <div>
      <h2>Archive</h2>
      <Link to="/archive-dashboard">
        <Button className="btn" variant="secondary">
          Dash board
        </Button>
      </Link>
      <TextList />
    </div>
  );
}
