import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./FeaturedCard.css";

const featured = [
  {
    id: 1,
    title: "D.I.Y Latte Art",
    Description:
      "Tag us in your latte art photos using hashtag #badlatteartcoffee",
    image: "feat-1.jpg",
  },
  {
    id: 2,
    title: "We're Always Open!",
    Description: "Even on Holidays! We're always open to serve you.",
    image: "feat-2.jpg",
  },
  {
    id: 3,
    title: "Bring your own coffee cup!",
    Description: "Let us help reduce waste and take care of our planet.",
    image: "feat-3.jpg",
  },
  {
    id: 4,
    title: "BLAC Exclusive Series",
    Description: "Try our new Salted Cream Cheese Latte.",
    image: "feat-4.jpg",
  },
  {
    id: 5,
    title: "New Food Items",
    Description:
      "Taste our newest Cheesy Hungarian Sausage Pandesal and Pesto w/ Shredded Chicken Pandesal!",
    image: "feat-5.jpg",
  },
];

function FeaturedCard() {
  return (
    <Container className="space">
      <Row>
        {featured.map((feat) => {
          return (
            <Col md={12} lg={4} className="">
              <Card className="card shadow p-3 mb-5">
                <Card.Img
                  src={`./assets/features/${feat.image}`}
                  class="card-img-top mx-auto"
                  alt="..."
                />
                <Card.Body>
                  <h5>{feat.title}</h5>
                  <Card.Text>{feat.Description}</Card.Text>
                  <Button variant="outline-info" className="rounded-pill">
                    Show more details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default FeaturedCard;
