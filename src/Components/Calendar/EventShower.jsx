import EventCards from "./EventCards";
import Calendar from "./Calendar";

const EventShower = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-4 col-md-4 col-sm-12">
          <Calendar />
        </div>
        <div className="col-12 col-lg-8 col-md-8 col-sm-12">
          <EventCards />
        </div>
      </div>
    </div>
  );
};

export default EventShower;
