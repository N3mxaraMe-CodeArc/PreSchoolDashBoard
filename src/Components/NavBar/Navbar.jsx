import '../../App.css'
import "./Navbar.css";

const Navbar = () => {

  return (
    <nav className={`navbar navbar-expand-lg mt-2 `} data-bs-theme="light">
      <div className={`container-fluid `}>
        <a className="navbar-brand text-white fw-bold"  href="#">
          Brand Name
        </a>
        <div className="d-flex justify-content-end align-items-center">
          <button className="btn btn-outline-light mx-2 fw-bold">Login</button>
          <button
            style={{ backgroundColor: "#8D5CF6" }}
            className="btn text-white sign-btn "
          >
            Join us
            <i
              style={{ background: "none", marginLeft: "10px" }}
              className="bi bi-arrow-right icon"
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
