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
    <ButtonGroup className="button-group" aria-label="Basic example">
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
      <Route path="/archive" component={Archive} />
      <Route path="/forum" component={Forum} />
      <Route path="/games" component={Games} />
      <Route path="/lists" component={Lists} />
      <Route path="/tools" component={Tools} />
    </Switch>
  </main>
);

export default Main;