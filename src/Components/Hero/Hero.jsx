import HeroImg from "../../assets/HeroSection/Hero.png";
import HeroContent from "./HeroContent";
import { useWindowSize } from "./WindowSize";

const Hero = () => {
  const { width } = useWindowSize();
  const isSmallWindow = width < 768;

  return (
    <div className="container-fluid position-relative">
      <div className="row justify-content-end">
        <div className="col-12 col-md-6 col-sm-12 d-flex flex-column">
          <div
            className={`d-flex ${
              isSmallWindow
                ? "justify-content-center mt-5"
                : "justify-content-end"
            } `}
            style={{ flex: 1 }}
          >
            <HeroContent />
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="col-12 col-md-6 d-flex justify-content-end"
        >
          <img src={HeroImg} alt="Hero" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
