import React from 'react';
import { Link } from "react-router-dom";

const GamesList = () => (
  <div>
    <h2>Games</h2>
    <Link to="/games/tic-tac-toe"><h3>X-O</h3></Link>
  </div>
);

export default GamesList;