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
    <ButtonGroup className="button-group main-buttons" aria-label="Basic example">

      <Link to="/archive">
        <Button className="btn" variant="secondary"> Archive </Button>
      </Link>
      <Link to="/forum">
        <Button className="btn" variant="secondary">Forum</Button>
      </Link>

      <Link to="/games">
        <Button className="btn" variant="secondary">Games</Button>
      </Link>
      <Link to="/lists">
        <Button className="btn" variant="secondary">List </Button>
      </Link>

      <Link to="/tools">
        <Button className="btn" variant="secondary">Tools </Button>
      </Link>
    </ButtonGroup>


    <Switch>
      <Route path="/archive" component={Archive} />
      <Route path="/forum" exact component={Forum} />
      <Route path="/games" exact component={Games} />
      <Route path="/lists" exact component={Lists} />
      <Route path="/tools" exact component={Tools} />
    </Switch>
  </main>
);

export default Main;