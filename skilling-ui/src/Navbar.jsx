function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg rf-navbar">
      <div className="container">

        {/* LOGO */}
        <div className="d-flex align-items-center gap-3">

          <div className="rf-logo-circle"></div>

          <div className="rf-logo-text">
            <div className="rf-reliance">Reliance</div>
            <div className="rf-foundation">Foundation</div>
          </div>

          <div className="rf-divider"></div>

          <div className="rf-academy">
            SKILLING <br /> ACADEMY
          </div>

        </div>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto rf-menu">
            <li className="nav-item">Skill Development</li>
            <li className="nav-item">Job Opportunities</li>
            <li className="nav-item">Mentorship</li>
            <li className="nav-item">About Us ▾</li>
          </ul>

          {/* LOGIN */}
          <button
            className="rf-login-btn"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
          >
            Login
          </button>

          {/* HEADPHONE ICON */}
          <div className="rf-headphone ms-3">🎧</div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;