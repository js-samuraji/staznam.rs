import React from "react";
import OneTool from "./OneTool";
import { Switch, Route } from "react-router-dom";
import Bmi from "./bmi/Bmi";



export default function Tools() {
  //TODO SETUP ARR IN DB
  const arr = [
    {
      title: "BMI Kalkulator",
      text: "lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum",
      path: "/tools/bmi"
    }, {
      title: "Unos Kalorija",
      text: "lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum",
      path: "/tools/calories"
    }, {
      title: "Budzet",
      text: "lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum",
      path: "tools/budget"
    },
  ]



  return (
    <div>
      <Switch>
        <Route path="/tools/bmi" component={Bmi} />
      </Switch>
      <div>
        {
          arr.map(tool => <OneTool tool={tool} key={tool.path} />)
        }
      </div>
    </div>
  )
}

