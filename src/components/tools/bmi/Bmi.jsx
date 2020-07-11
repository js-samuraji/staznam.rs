import React, { useState } from "react";
import BmiTable from "./BmiTable";

export default function Bmi() {
  const [bmi, setBmi] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [height, setHeight] = useState();
  const [mass, setMass] = useState();
  const [err, setErr] = useState();
  const [err1, setErr1] = useState();
  const [err2, setErr2] = useState();


  const calculateBmi = () => {
    let tmp;
    setErr();
    setErr1();
    setErr2();

    if (age >= 18) {
      if (mass >= 30 && mass <= 200) {
        if (height >= 50 && height <= 220) {
          tmp = (mass / (height * height)) * 10000;
          setBmi((Math.round(tmp * 100) / 100).toFixed(2));
        } else {
          setErr2('Visina mora biti u okviru 50-220cm');
        }
      } else {
        setErr1('Tezina mora biti u okviru 30-200kg ');
      }
    } else {
      setErr('Korisnik mora imati 18 godina ili vise');
    }

  };

  return (
    <div>
      <h2>BMI Kalkulator</h2>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Starost <br /> (godine)
          </label>
          <input type="number" onChange={(e) => setAge(e.target.value)} />
          {err && <p className="alert alert-danger">{err}</p>}
          <br />
          <label>Pol:</label>
          <button
            className={gender === 'male' ? "btn btn-primary" : "btn btn-light"}
            onClick={(e) => setGender("male")}
          >
            muski
          </button>
          <button
            className={gender === 'female' ? "btn btn-primary" : "btn btn-light"}
            onClick={(e) => setGender("female")}
          >
            zenski
          </button>
          <div>
            <label>Visina (cm)</label>
            <input type="number" onInput={(e) => setHeight(e.target.value)} />
            {err2 && <p className="alert alert-danger">{err2}</p>}
          </div>
          <div>
            <label>Tezina (kg)</label>
            <input type="number" onInput={(e) => setMass(e.target.value)} />
            {err1 && <p className="alert alert-danger">{err1}</p>}
          </div>
          <button className="btn btn-outline-primary" onClick={calculateBmi}>
            Izracunati
          </button>
          <button className="btn btn-outline-success">Sacuvati</button>
        </form>
        <label>Vas bmi je:</label>
        {bmi && <p className="alert alert-info">{bmi}</p>}
      </div>
      <div>
        <BmiTable gender={gender} age={age} />
      </div>
    </div>
  );
}
