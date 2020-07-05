import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Archive from "../components/archive/Archive";
import Forum from "../components/forum/Forum";
import Games from "../components/games/Games";
import Lists from "../components/lists/Lists";
import Tools from "../components/tools/Tools";
import Homepage from "../components/homepage/Homepage";

const Main = () => (
  <main>
    <Link to="/">Home</Link>
    <Link to="/archive">Archive</Link>
    <Link to="/forum">Forum</Link>
    <Link to="/games">Games</Link>
    <Link to="/lists">Lists</Link>
    <Link to="/tools">Tools</Link>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/archive" component={Archive} />
      <Route path="/forum" component={Forum} />
      <Route path="/games" component={Games} />
      <Route path="/lists" component={Lists} />
      <Route path="/tools" component={Tools} />
    </Switch>
  </main>
);

export default Main;
