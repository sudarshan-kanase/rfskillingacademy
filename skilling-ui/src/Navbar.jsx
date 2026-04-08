import { useLocation } from "react-router-dom";
import logo from "./assets/logo.jpeg";

function Navbar() {
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      window.location.href = "/" + id;
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg rf-navbar">
      <div className="container">

        {/* LOGO */}
        <img
          src={logo}
          alt="Senseigen"
          className="rf-logo-img"
          onClick={() => (window.location.href = "/")}
        />

        {/* MENU */}
        <div className="collapse navbar-collapse show">

          <ul className="navbar-nav ms-auto rf-menu">

            <li className="nav-item">
              <span onClick={() => scrollTo("programs")} className="nav-link">
                Programs
              </span>
            </li>

            <li className="nav-item">
              <span onClick={() => scrollTo("impact")} className="nav-link">
                Impact
              </span>
            </li>

            <li className="nav-item">
              <span onClick={() => scrollTo("benefits")} className="nav-link">
                Benefits
              </span>
            </li>

            <li className="nav-item">
              <span onClick={() => scrollTo("reach")} className="nav-link">
                Reach
              </span>
            </li>

          </ul>

          <button
            className="rf-login-btn"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
          >
            Login
          </button>

          <div className="rf-headphone ms-3">🎧</div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;