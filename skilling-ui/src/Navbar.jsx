import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo.jpeg";

function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "active-link" : "";

  return (
    <nav className="navbar navbar-expand-lg bg-dark rf-navbar px-3 px-lg-4 shadow-sm">
      <div className="container-fluid">

        {/* LOGO */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src={logo}
            alt="logo"
            style={{ height: "45px", borderRadius: "6px" }}
          />
        </Link>

        {/* TOGGLE */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navMenu">

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <Link to="/" className={`nav-link text-white ${isActive("/")}`}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className={`nav-link text-white ${isActive("/about")}`}>
                About
              </Link>
            </li>

            {/* SERVICE DROPDOWN */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle text-white"
                role="button"
                data-bs-toggle="dropdown"
              >
                Service
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/trading" className="dropdown-item">
                    Training
                  </Link>
                </li>
                <li>
                  <Link to="/placement" className="dropdown-item">
                    Placement
                  </Link>
                </li>
              </ul>
            </li>

            {/* PROGRAM DROPDOWN */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle text-white"
                role="button"
                data-bs-toggle="dropdown"
              >
                Program
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/blog" className="dropdown-item">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="dropdown-item">
                    Gallery
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/contact" className={`nav-link text-white ${isActive("/contact")}`}>
                Contact
              </Link>
            </li>

          </ul>

          {/* LOGIN BUTTON */}
          <button
            className="btn btn-primary ms-lg-3 mt-3 mt-lg-0 px-4 rounded-pill shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
          >
            Login
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;