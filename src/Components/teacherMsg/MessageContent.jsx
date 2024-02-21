import "../../App.css";
import { useWindowSize } from "../Hero/WindowSize";

const MessageContent = () => {
  const { width } = useWindowSize();
  const isSmallWindow = width < 768;
  return (
    <div>
      <div
        style={{ height: "0.3rem", width: "3rem" }}
        className="bg-warning mb-2"
      ></div>
      <h2
        className={`fs-3 text-light fw-bold ${
          isSmallWindow ? "text-center" : ""
        }`}
      >
        Message From Head Teacher
      </h2>
      <p
        style={{ fontSize: "14px" }}
        className={`fw-bold text-secondary ${
          isSmallWindow ? "text-center" : ""
        }`}
      >
        Mrs.Anoma Udawela
        <span style={{ fontSize: "12px" }} className="fw-bold">
          ( Dip. Nursary Teaching )
        </span>
      </p>
      <span
        style={{ fontSize: "12px", textWrap: "wrap" }}
        className="text-light font-monospace"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
        voluptatibus deserunt, quasi soluta beatae iste, vitae similique
        doloremque provident quas dolores numquam ipsum praesentium at.
      </span>
      <br />
      <button
        className={`see-more btn ${
          isSmallWindow
            ? "col-12 text-center d-flex justify-content-center mx-auto btn-lg btn-block"
            : ""
        }`}
      >
        See More
        <i style={{ background: "none" }} className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};

export default MessageContent;
