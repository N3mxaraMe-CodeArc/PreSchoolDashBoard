import { useEffect } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/NavBar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {


  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

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
