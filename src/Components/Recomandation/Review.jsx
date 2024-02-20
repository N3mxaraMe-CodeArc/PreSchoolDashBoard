import RecCard from "./RecCard";

const Review = () => {
  return (
    <div>
      {/* data-aos="fade-up" data-aos-delay="500" */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-3 col-sm-6">
            <RecCard Name="Happy Students" />
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <RecCard Name="Recommendations"/>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <RecCard Name="Experience Years"/>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <RecCard Name="Happy Parents"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
