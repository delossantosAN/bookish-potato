import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";

function HeroPage() {
  return (
    <section>
      <Container>
        <Row>
          <div className="col-md-12 col-lg-6 mb-5">
            <Carousel>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="./assets/features/top1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="./assets/features/top2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="./assets/features/top3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="./assets/features/top4.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="./assets/features/top5.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-md-12 col-lg-6 mb-5">
            <h4>
              <strong>WE ARE THE BLAC COFFEE SHOP</strong>
            </h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              consequatur eligendi quisquam doloremque vero ex debitis veritatis
              placeat unde animi laborum sapiente illo possimus, commodi
              dignissimos obcaecati illum maiores corporis.
            </p>
            <p>
              <strong>Where are we located?</strong>
            </p>
            <p className="text-muted">
              We are located at No. 48 Lilac St. corner Kanlaon St., Concepcion
              Dos, Marikina City. Open Everyday from 8am - 9pm. Come and visit
              us to expererience best customer service and good taste coffee
              just for you.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              itaque voluptate nesciunt laborum incidunt. Officia, quam
              consectetur. Earum eligendi aliquam illum alias, unde optio
              accusantium soluta, iusto molestiae adipisci et?
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default HeroPage;
