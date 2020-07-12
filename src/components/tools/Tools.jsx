import React from "react";
// import OneTool from "./OneTool";
import { Link } from "react-router-dom";



export default function Tools() {


  return (
    <div >
      <div className="shadow p-3 mb-5 bg-white rounded">
        <h4>BMI Kalkulator</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam nam, voluptatum commodi autem fugit facere eum laborum neque nobis pariatur provident modi,
          asperiores, natus quas. Sed non harum voluptatum?</p>
        <Link to="/tools/bmi" >Idi na BMI</Link>
      </div>
      <div className="shadow p-3 mb-5 bg-white rounded">
        <h4>Budzet</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, inventore sequi facilis omnis consequatur earum minus corporis iste facere nemo,
           nulla magnam cumque harum consectetur autem voluptates numquam esse eos.</p>
        <Link to="/tools/budget">Idi na Budzet</Link>
      </div>
    </div>
  )
}

