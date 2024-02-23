import RecCard from "./RecCard";

const Review = () => {
  return (
    <div>
      
      <div data-aos="fade-up" data-aos-delay="10" className="container mt-4">
        <div className="row">
          <div className="col-12 col-lg-3 col-sm-6">
            <RecCard Name="Happy Students" end={3000562}/>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <RecCard Name="Recommendations" end={695748}/>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <RecCard Name="Experience Years" end={25635}/>
          </div>
          <div className="col-12 col-lg-3 col-sm-6">
            <RecCard Name="Happy Parents" end={67859595}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
