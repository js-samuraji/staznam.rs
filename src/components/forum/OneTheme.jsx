import React, { useState } from "react";
import Likes from "./forums/Likes";
import { uuid } from "uuidv4";

const OneTheme = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  let poruka = "Molim vas unesite tekst poruke.";

  let tekstovi = [
    "Time machine, I haven't invented any time machine.",
    "Right. Listen, Doc. George, help me, please.",
  ];

  function handleSubmit(e) {
    e.preventDefault();
    if (text === "") {
      setMessage(poruka);
    } else {
      tekstovi.push(text);
      let x = document.getElementById("texts");
      x.innerHTML += text;
      // x.innerHTML += <Likes></Likes>;
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
            <p key={uuid()}>
              {tekst} <Likes></Likes>
            </p>
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
        />
        {message}
      </form>
    </div>
  );
};

export default OneTheme;
