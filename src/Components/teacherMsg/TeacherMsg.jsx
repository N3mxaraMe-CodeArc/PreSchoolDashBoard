import MessageContent from "./MessageContent";

const TeacherMsg = () => {
  return (
    <div className="container">
      <div className="row p-5  my-5">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="col-12 col-md-6 col-sm-12 d-flex align-items-center justify-content-center"
        >
          <img
            src="https://via.placeholder.com/300"
            alt="Teacher"
            className="img-fluid rounded-lg"
          />
        </div>
        <div
        data-aos="fade-left"
        data-aos-delay="100"
          className="col-12 col-md-6 col-sm-12 d-flex align-items-center"
        >
          <MessageContent />
        </div>
      </div>
    </div>
  );
};

export default TeacherMsg;
