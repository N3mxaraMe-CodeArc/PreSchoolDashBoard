import "./RecCard.css";
import PropTypes from "prop-types";

const RecCard = ({ Name }) => {

  return (
    <div className="container">
      <h1
        style={{ color: "#8D5CF6" }}
        className="fw-bold fs-2 text-center mb-2"
      >
        15K
      </h1>
      <h5 className="fw-bold text-light fs-6 text-center">{Name}</h5>
    </div>
  );
};

RecCard.propTypes = {
    Name: PropTypes.string.isRequired
}

export default RecCard;
