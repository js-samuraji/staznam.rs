import React from "react";
import Form from "react-bootstrap/Form";

export default function DashBoard() {
  return (
    <div className="dash-board">
      <h2>Dash Board</h2>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Naslov</Form.Label>
          <Form.Control type="textarea" placeholder="Unesite naslov teksta" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Izaberite kategoriju</Form.Label>
          <Form.Control as="select">
            <option>Zanimljivosti</option>
            <option>Muzika</option>
            <option>Knjige</option>
            <option>Igrice</option>
            <option>Saveti</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Dodajte slike" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Sazetak</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Tekst</Form.Label>
          <Form.Control as="textarea" rows="10" />
        </Form.Group>
        <Form.Control size="sm" type="text" placeholder="Autor teksta" />
        <Form.Control size="sm" type="text" placeholder="Izvor fotografija" />
        <button className="dashboard-btn">Save</button>
        <button className="dashboard-btn">Post</button>
      </Form>
    </div>
  );
}
