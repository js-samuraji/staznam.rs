import React, { useState } from "react";
import BmiTable from "./BmiTable";

export default function Bmi() {
  const [bmi, setBmi] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [height, setHeight] = useState();
  const [mass, setMass] = useState();

  const calculateBmi = () => {
    let tmp = mass / (height * height) * 10000;
    setBmi((Math.round(tmp * 100) / 100).toFixed(2));
  }


  return (
    <div>
      <h2>BMI Kalkulator</h2>
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <label>Starost <br /> (godine)</label>
          <input type="number" onChange={e => setAge(e.target.value)} />
          <br />
          <label>Pol:</label>
          <button className='btn btn-primary' onClick={e => setGender('male')} >muski</button>
          <button className='btn btn-primary' onClick={e => setGender('female')}>zenski</button>
          <div>
            <label>Visina (cm)</label>
            <input type="number" onInput={e => setHeight(e.target.value)} />
          </div>
          <div>
            <label>Tezina (kg)</label>
            <input type="number" onInput={e => setMass(e.target.value)} />
          </div>
          <button className="btn btn-outline-primary" onClick={calculateBmi}>Izracunati</button>
          <button className="btn btn-outline-success">Sacuvati</button>
        </form>
        <label>Vas bmi je:</label>
        {bmi && <p class="alert alert-info">{bmi}</p>}
      </div>
      <div>
        <BmiTable gender={gender} age={age} />
      </div>
    </div >
  );
}
