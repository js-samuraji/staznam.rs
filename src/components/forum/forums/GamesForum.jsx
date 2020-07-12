import React from "react";
import Theme from "../Theme";
import { Link } from "react-router-dom";

const GamesForum = () => {
  return (
    <div style={{ margin: '0 auto'}}>
      <h1>Games Forum</h1>
      <p>
        Whoa, this is heavy. Marty, don't be such a square. Everybody who's
        anybody drinks. Yeah well look, Marvin, Marvin, you gotta play. See
        that's where they kiss for the first time on the dance floor. And if
        there's no music, they can't dance, and if they can't dance, they can't
        kiss, and if they can't kiss, they can't fall in love and I'm history.
      </p>
      <Link to="/forum/gamesforum/themes"><Theme></Theme></Link>
    </div>
  );
};

export default GamesForum;
