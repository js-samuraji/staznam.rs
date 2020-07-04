import React from 'react'

export default function Bmi() {
  return (
    <div>
      <h2>BMI Kalkulator</h2>
      <div>
        <button>cm/kg</button>
        <button>inch/lb</button>
        <form>
          <label>Starost</label>
          <input type="number" />
          <div>
            <label>Visina</label>
            <input type="number" />
            <label>cm</label>
          </div>
          <div>
            <label>Tezina</label>
            <input type="number" />
            <label>kg</label>

          </div>
          <button>Izracunati</button>
          <button>Sacuvati</button>

        </form>
      </div>
    </div>
  )
}
