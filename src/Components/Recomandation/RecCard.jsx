import "./RecCard.css";
import PropTypes from "prop-types";
import CountUp from "react-countup";

const RecCard = ({ Name, end }) => {
  return (
    <div className="container">
      <div
        style={{ color: "#8D5CF6" }}
        className="fw-bold fs-2 text-center mb-2"
      >
        <CountUp duration={4}  end={end} />
      </div>

      <h5 className="fw-bold text-light fs-6 text-center">{Name}</h5>
    </div>
  );
};

RecCard.propTypes = {
  Name: PropTypes.string.isRequired,
  end: PropTypes.number.isRequired,
};

export default RecCard;
