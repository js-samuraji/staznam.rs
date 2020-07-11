import React from "react";
import GamesList from "./gamesList/GamesList";
import { Switch, Route } from "react-router-dom";
import TicTacToe from "./ticTacToe/TicTacToe";

const Games = () => (
  <Switch>
    <Route path="/games/" exact component={GamesList} />
    <Route path="/games/tic-tac-toe" exact component={TicTacToe} />
  </Switch>
);

export default Games;
