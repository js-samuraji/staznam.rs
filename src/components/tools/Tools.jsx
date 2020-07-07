import React from "react";
// import OneTool from "./OneTool";
import { Switch, Route, Link } from "react-router-dom";
import Bmi from "./bmi/Bmi";
import Budget from "./budget/Budget";



export default function Tools() {


  return (
    <div>
      <div>
        <Link to="/tools/bmi">BMI</Link>
        {/* <Link to="/tools/calories"></Link> */}
        <Link to="/tools/budget">Budzet</Link>

      </div>
      <Switch>
        <Route path="/tools/bmi" exact component={Bmi} />
        <Route path="/tools/budget" exact component={Budget} />
      </Switch>

    </div>
  )
}

