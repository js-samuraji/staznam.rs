import React from 'react';
import { Link } from "react-router-dom";

const GamesList = () => (
  <div>
    <h1>Games</h1>
    <Link to="/games/tic-tac-toe">X-O</Link>
  </div>
);

export default GamesList;