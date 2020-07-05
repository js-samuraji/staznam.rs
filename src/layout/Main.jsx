import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Archive from "../components/archive/Archive";
import Forum from "../components/forum/Forum";
import Games from "../components/games/Games";
import Lists from "../components/lists/Lists";
import Tools from "../components/tools/Tools";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const Main = () => (
  <main>
    <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">
        {" "}
        <Link to="/archive">Archive</Link>
      </Button>
      <Button variant="secondary">
        <Link to="/forum">Forum</Link>
      </Button>
      <Button variant="secondary">
        {" "}
        <Link to="/games">Games</Link>
      </Button>
      <Button variant="secondary">
        <Link to="/lists">Lists</Link>
      </Button>
      <Button variant="secondary">
        {" "}
        <Link to="/tools">Tools</Link>
      </Button>
    </ButtonGroup>


    <Switch>
      <Route path="/archive" exact component={Archive} />
      <Route path="/forum" exact component={Forum} />
      <Route path="/games" exact component={Games} />
      <Route path="/lists" exact component={Lists} />
      <Route path="/tools" exact component={Tools} />
    </Switch>
  </main>
);

export default Main;