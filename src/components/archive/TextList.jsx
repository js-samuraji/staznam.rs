import React from "react";
import ShortText from "./shortText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      </Container>
    </div>
  );
}
