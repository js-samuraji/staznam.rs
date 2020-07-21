import React, { useState } from "react";
import Likes from "./Likes";
import { uuid } from "uuidv4";

const OneTheme = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [tekstovi, setTekstovi] = useState([]);
  let poruka = "Molim vas unesite tekst poruke.";

  function handleSubmit(e) {
    e.preventDefault();
    if (text === "") {
      setMessage(poruka);
    } else {
      let y = tekstovi.concat(text);
      setTekstovi(y);
      setText("");
      setMessage("");
      document.getElementById("area").value = "";
    }
  }

  return (
    <div>
      <h2>Prva tema</h2>
      <div id="texts">
        <div>
          {tekstovi.map((tekst) => (
            <li key={uuid()}>
              {tekst} <Likes></Likes>
            </li>
          ))}
        </div>
      </div>

      <form action="" method="" style={{ display: "grid", margin: "0 auto" }}>
        <label>Dodaj odgovor na temu: </label>
        <textarea
          id="area"
          cols="30"
          rows="3"
          style={{ resize: "none", width: "50%", margin: "0 auto" }}
          required
          onInput={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <input
          type="submit"
          value="Dodaj poruku"
          style={{ width: "200px", margin: "0 auto" }}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        />
        <input
          type="reset"
          value="Obriši tekst"
          style={{ width: "200px", margin: "0 auto" }}
          onClick={() => setText("")}
        />
        {message}
      </form>
    </div>
  );
};

export default OneTheme;
