import React, { useState } from "react";

const OneTheme = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  let poruka = "Molim vas unesite tekst poruke.";

  function handleSubmit(e) {
    e.preventDefault();
    let x = document.getElementById("texts");

    if (text === "") {
      setMessage(poruka);
    } else {
      x.innerHTML += text;
      setText("");
      setMessage("");
    }
  }

  return (
    <div>
      <h2>Prva tema</h2>
      <div id="texts">
        <p>
          Time machine, I haven't invented any time machine. No no no, Doc, I
          just got here, okay, Jennifer's here, we're gonna take the new truck
          for a spin. Right. Listen, Doc. George, help me, please.
        </p>
      </div>

      <form action="" method="" style={{ display: "grid", margin: "0 auto" }}>
        <label>Dodaj odgovor na temu: </label>
        <textarea
          id=""
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
