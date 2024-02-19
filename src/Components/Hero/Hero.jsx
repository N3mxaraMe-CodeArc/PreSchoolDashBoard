import HeroImg from "../../assets/HeroSection/Hero.png";

const Hero = () => {
  return (
    <div className="container-fluid position-relative">
      <div className="row">
        <div
          style={{ border: "1px solid red" }}
          className="col-12 col-md-6 col-sm-12 h-50 d-flex align-items-center"
        >
          <h5 className="fw-bold h5 text-primary fs-16">Welcome</h5>
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
