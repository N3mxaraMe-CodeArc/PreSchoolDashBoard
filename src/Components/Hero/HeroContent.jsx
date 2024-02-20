import { useState, useEffect } from 'react';

const HeroContent = () => {
  const [isSmallWindow, setIsSmallWindow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallWindow(window.innerWidth < 768);
    };

    handleResize(); // Call once on mount
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{ border: "1px solid white", width: "80%", height: "100%" }}
      className="d-flex flex-direction-column align-items-center"
    >
      <div
        style={{ border: "1px solid red", width: "100%" }}
        className={`col-12 col-md-8 d-flex flex-column ${isSmallWindow ? 'justify-content-center' : 'justify-content-start'}`}
      >
        <h5 className="fw-bold text-uppercase text-primary fs-16">Welcome</h5>
        <h1 className="text-uppercase fw-bold text-light fs-58">
          Little rose pre
          <br />
          School
        </h1>
        {!isSmallWindow && (
          <h4
            style={{ fontSize: "16px" }}
            className="text-uppercase fw-bold fs-20 text-light"
          >
            Every day brings with it a fresh set of learning possibilities.
          </h4>
        )}
        <div style={{ textAlign: isSmallWindow ? "center" : "initial" }}>
          <button className="btn buttons fw-bold">
            Get in touch
          </button>
          <button className="btn text-light btn-hovers">
            Get in touch <i className="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
