import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div className="container-fluid">
        <Hero/>
      </div>
    </>
  );
}

export default App;
