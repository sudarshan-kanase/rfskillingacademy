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

  if (!user) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-5 text-center">

      <h2 className="fw-bold">
        Welcome {user.name}
      </h2>

      <h4 className="mt-3 text-success">
        Role: {user.role}
      </h4>

      {/* ROLE UI */}
      {user.role === "student" && (
        <div className="mt-4">
          <button className="btn btn-primary m-2">
            View Courses
          </button>

          <button className="btn btn-warning m-2">
            Apply Jobs
          </button>
        </div>
      )}

      {user.role === "mentor" && (
        <div className="mt-4">
          <button className="btn btn-success m-2">
            Mentor Requests
          </button>

          <button className="btn btn-dark m-2">
            Add Session
          </button>
        </div>
      )}

      {user.role === "admin" && (
        <div className="mt-4">
          <button className="btn btn-danger m-2">
            Manage Users
          </button>

          <button className="btn btn-secondary m-2">
            Add Courses
          </button>
        </div>
      )}

      <br />

      <button className="btn btn-outline-danger mt-4" onClick={logout}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;