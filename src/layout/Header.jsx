import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => (
  <header>
    <section className='showcase'>
      <div className='video-container'>
        <video src='/staznam.rs/img/background-video.mp4' autoPlay muted loop className='mov' />
      </div>
      <div className='content'>

        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image
                src="/staznam.rs/img/logo/logo.png"
                clasName="headline"
                roundedCircle
              />
            </Col>

            <Col xs={6} md={4}>
              <h1 className="headline">STAZNAM.RS</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    <hr />
  </header>
);

export default Header;