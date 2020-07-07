import React, { useState } from "react";
import BmiTable from "./BmiTable";

export default function Bmi() {
  const [bmi, setBmi] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [height, setHeight] = useState();
  const [mass, setMass] = useState();

  const calculateBmi = () => {

    console.log('age', age, 'gender', gender, 'height', height, mass);
    let tmp = mass / (height * height) * 10000;
    setBmi((Math.round(tmp * 100) / 100).toFixed(2));
  }


  return (
    <div>
      <h2>BMI Kalkulator</h2>
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <label>Starost (godine)</label>
          <input type="number" onChange={e => setAge(e.target.value)} />
          <label>Pol:</label>
          <button onClick={e => setGender('muski')}>muski</button>
          <button onClick={e => setGender('zenski')}>zenski</button>
          <div>
            <label>Visina (cm)</label>
            <input type="number" onInput={e => setHeight(e.target.value)} />
          </div>
          <div>
            <label>Tezina (kg)</label>
            <input type="number" onInput={e => setMass(e.target.value)} />
          </div>
          <button onClick={calculateBmi}>Izracunati</button>
          <button>Sacuvati</button>
        </form>
        <label>Vas bmi je:</label>
        <p>{bmi}</p>
      </div>
      <div>
        <BmiTable />
      </div>
    </div>
  );
}
