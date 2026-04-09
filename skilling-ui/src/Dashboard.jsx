import { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(data);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  if (!user)
    return <h4 className="text-center mt-5 text-muted">Loading...</h4>;

  return (
    <div className="container py-5 text-center">

      {/* HEADER */}
      <div className="mb-4">
        <h2 className="fw-bold">
          Welcome, <span className="text-primary">{user.name || user.firstName}</span>
        </h2>

        <h5 className="mt-2 text-success">
          Role: {user.role}
        </h5>
      </div>

      {/* ROLE UI */}
      <div className="mt-4">

        {user.role === "student" && (
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <button className="btn btn-primary px-4">
              View Courses
            </button>

            <button className="btn btn-warning px-4">
              Apply Jobs
            </button>
          </div>
        )}

        {user.role === "mentor" && (
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <button className="btn btn-success px-4">
              Mentor Requests
            </button>

            <button className="btn btn-dark px-4">
              Add Session
            </button>
          </div>
        )}

        {user.role === "admin" && (
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <button className="btn btn-danger px-4">
              Manage Users
            </button>

            <button className="btn btn-secondary px-4">
              Add Courses
            </button>
          </div>
        )}

      </div>

      {/* LOGOUT */}
      <button
        className="btn btn-outline-danger mt-5 px-4"
        onClick={logout}
      >
        Logout
      </button>

    </div>
  );
}

export default Dashboard;