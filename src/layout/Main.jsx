import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Archive from "../components/archive/Archive";
import Forum from "../components/forum/Forum";
import Games from "../components/games/Games";
import Lists from "../components/lists/Lists";
import Tools from "../components/tools/Tools";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import PlaylistForum from "../components/forum/forums/PlaylistForum";
import GamesForum from "../components/forum/forums/GamesForum";
import ToolsForum from "../components/forum/forums/ToolsForum";
import ArchieveForum from "../components/forum/forums/ArchieveForum";
import OneTheme from "../components/forum/OneTheme";
import Text from "../components/archive/text";
import Bmi from "../components/tools/bmi/Bmi";
import Budget from "../components/tools/budget/Budget";

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
      <Route path="/archive" exact component={Archive} />
      <Route path="/forum" exact component={Forum} />
      <Route path="/games" component={Games} />
      <Route path="/lists" exact component={Lists} />
      <Route path="/archive-text" component={Text} />
      <Route path="/tools" exact component={Tools} />
      <Route path="/forum/playlistforum" exact component={PlaylistForum} />
      <Route path="/forum/gamesforum" exact component={GamesForum} />
      <Route path="/forum/toolsforum" exact component={ToolsForum} />
      <Route path="/forum/archiveforum" exact component={ArchieveForum} />
      <Route path="/forum/archiveforum/themes" exact component={OneTheme} />
      <Route path="/forum/gamesforum/themes" exact component={OneTheme} />
      <Route path="/forum/playlistforum/themes" exact component={OneTheme} />
      <Route path="/forum/toolsforum/themes" exact component={OneTheme} />
      <Route path="/tools/bmi" component={Bmi} />
      <Route path="/tools/budget" component={Budget} />
    </Switch>
  </main>
);

export default Main;
