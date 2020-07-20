import React from "react";
import ShortText from "./shortText";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TextList() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {" "}
            <ShortText />
          </Col>
          <Col>
            {" "}
            <ShortText />
          </Col>
          <Col>
            {" "}
            <ShortText />
          </Col>
          <Col>
            {" "}
            <ShortText />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
