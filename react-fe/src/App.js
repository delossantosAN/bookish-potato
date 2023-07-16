import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroPage />
      <Container>
        <hr className="my-5" />
      </Container>
    </div>
  );
}

export default App;
