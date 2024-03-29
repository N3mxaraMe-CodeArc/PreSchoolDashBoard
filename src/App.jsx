import { useEffect } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/NavBar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Review from "./Components/Recomandation/Review";
import TeacherMsg from "./Components/teacherMsg/TeacherMsg";
import EventShower from "./Components/Calendar/EventShower";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="Main-inner">
      <div className="container">
        <Navbar />
      </div>
      <div className="container-fluid">
        <Hero />
      </div>
      <div className="container-fluid">
        <Review />
      </div>
      <br />
      <div className="container-fluid ">
        <TeacherMsg />
      </div>
      <div className="container">
        <EventShower/>
      </div>
    </div>
  );
}

export default App;
