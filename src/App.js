import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ApartmentList from "./components/ApartmentList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ApartmentList/>
    </div>
  );
}

export default App;
