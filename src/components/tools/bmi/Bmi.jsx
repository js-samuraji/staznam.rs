import React, { } from "react";

export default function Bmi() {
  // const [bmi, setBmi] = useState();
  // console.log(bmi, 'path')
  // setBmi('11111');
  return (
    <div>
      <h2>BMI Kalkulator</h2>
      <div>
        <form>
          <label>Starost</label>
          <input type="number" />
          <div>
            <label>Visina</label>
            <input type="number" />
            <select>
              <option>cm</option>
              <option>inc</option>
            </select>
          </div>
          <div>
            <label>Tezina</label>
            <input type="number" />
            <select>
              <option>kg</option>
              <option>lb</option>
            </select>
          </div>
          <button>Izracunati</button>
          <button>Sacuvati</button>
        </form>
        <label>Vas bmi je:</label>
        {/* <p>{bmi}</p> */}
      </div>
    </div>
  );
}
