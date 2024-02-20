import HeroImg from "../../assets/HeroSection/Hero.png";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="container-fluid position-relative">
      <div className="row justify-content-end">
        <div className="col-12 col-md-6 col-sm-12 d-flex flex-column" style={{ border: "1px solid red" }}>
          <div className="d-flex justify-content-end " style={{ flex: 1 }}>
            <HeroContent />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-end">
          <img
            src={HeroImg}
            alt="Hero"
            style={{ border: "2px solid red" }}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
