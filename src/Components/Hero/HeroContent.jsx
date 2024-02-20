import { useWindowSize } from "./WindowSize";

const HeroContent = () => {
  const { width } = useWindowSize();
  const isSmallWindow = width < 768;

  return (
    <div
      data-aos="fade-right"
      data-aos-delay="300"
      style={{ width: "80%", height: "100%", gap: "2rem"}}
      className={`d-flex flex-direction-column align-items-center`}
    >
      <div
        style={{ width: "100%" }}
        className={`col-12 col-md-8 d-flex flex-column ${
          isSmallWindow
            ? "justify-content-center align-items-center"
            : "justify-content-start"
        }`}
      >
        <h5 className="fw-bold text-uppercase text-primary fs-5">Welcome</h5>
        <h1
          className={`text-uppercase fw-bold text-light fs-58 ${
            isSmallWindow ? "text-center" : ""
          }`}
        >
          Little rose pre
          <br />
          School
        </h1>
        {!isSmallWindow && (
          <h4
            style={{ fontSize: "16px" }}
            className="text-uppercase fw-bold fs-6 text-light lh-lg"
          >
            Every day brings with it a fresh set of learning possibilities.
          </h4>
        )}
        <div
          className="mt-4"
          style={{
            display: isSmallWindow ? "flex" : "block",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <button className="btn buttons fw-bold">Get in touch</button>
          <button className="btn text-light btn-hovers ms-2">
            Learn More <i className="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
