function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
      <div className="container">
        <a className="navbar-brand fw-bold">
          Reliance <span className="text-warning">Skilling Academy</span>
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">Skill Development</li>
            <li className="nav-item">Job Opportunities</li>
            <li className="nav-item">Mentorship</li>
            <li className="nav-item">About Us</li>
          </ul>

          <button
            className="btn btn-outline-dark rounded-pill"
            data-bs-toggle="modal"
            data-bs-target="#authModal"
          >
            Login / Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
