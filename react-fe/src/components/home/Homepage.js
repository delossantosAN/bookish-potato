import React from "react";
import HeroPage from "./HeroPage";
import FeaturedCard from "./FeaturedCard";
import { Container } from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";

function Homepage() {
  return (
    <>
      <Header />
      <HeroPage />
      <Container>
        <hr className="my-5" />
      </Container>
      <FeaturedCard />
      <Footer />
    </>
  );
}

export default Homepage;
