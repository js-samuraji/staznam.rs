import React from "react";
import ShortText from "./shortText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default function TextList() {
  return (
    <div>
      <Container>
        <h4 className="headline">Poslednja četiri teksta</h4>
        <Row>
          <Col>
            <ShortText />
          </Col>
          <Col>
            <ShortText />
          </Col>
          <Col>
            <ShortText />
          </Col>
          <Col>
            <ShortText />
          </Col>
        </Row>
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button variant="secondary">1</Button>{" "}
          <Button variant="secondary">2</Button>{" "}
          <Button variant="secondary">3</Button>{" "}
          <Button variant="secondary">4</Button>
        </ButtonGroup>
        <h4 className="headline">Najčitaniji tekstovi</h4>
        <Row>
          <Col>
            <ShortText />
          </Col>
          <Col>
            <ShortText />
          </Col>
          <Col>
            <ShortText />
          </Col>
          <Col>
            <ShortText />
          </Col>
        </Row>
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button variant="secondary">1</Button>{" "}
          <Button variant="secondary">2</Button>{" "}
          <Button variant="secondary">3</Button>{" "}
          <Button variant="secondary">4</Button>
        </ButtonGroup>
        <h4 className="headline">Najčitaniji u svojoj kategoriji</h4>
        <Row>
          <Col>
            <ShortText />
          </Col>

          <Col>
            <ShortText />
          </Col>

          <Col>
            <ShortText />
          </Col>

          <Col>
            <ShortText />
          </Col>
        </Row>
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button variant="secondary">1</Button>{" "}
          <Button variant="secondary">2</Button>{" "}
          <Button variant="secondary">3</Button>{" "}
          <Button variant="secondary">4</Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}
