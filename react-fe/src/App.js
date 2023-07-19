import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Homepage from "./components/home/Homepage";
import MenuList from "./components/menu/MenuList";

function App() {
  return (
    <div className="App">
      <Homepage />
      <MenuList />
    </div>
  );
}

export default App;
