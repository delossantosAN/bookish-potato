import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12} md={4} lg={4} xl={4} className="mx-auto">
            <p>
              <i className="fa-solid fa-location-dot"></i>&nbsp;Address: No. 48
              Lilac St. corner Kanlaon St., Concepcion Dos, Marikina City
            </p>
            <hr />
            <p>
              <i className="fa-regular fa-clock"></i>&nbsp;Business Hours: Open
              daily from 8AM to 9PM
            </p>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4} className="mx-auto">
            <h4>Blac Coffee</h4>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4} className="mx-auto">
            <p>Copyrights &#169; 2023 All Rights Reserved</p>
            <hr />
            <p>Mini Project 1 by : Adora delos Santos WD40P</p>
            <div className="d-inline-flex">
              <a
                class="nav-link px-2"
                href="https://www.facebook.com/dorabogsz"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                class="nav-link px-2"
                href="https://www.instagram.com/dorabogs"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                class="nav-link px-2"
                href="https://github.com/delossantosAN"
                target="_blank"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
