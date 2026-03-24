import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthModal() {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      const modal = new window.bootstrap.Modal(
        document.getElementById("authModal")
      );
      modal.show();
    }
  }, []);

  const handleSubmit = () => {
    if (!name) return alert("Enter Name");

    const user = {
      name,
      role,
      login: true,
    };

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/dashboard");
  };

  return (
    <div className="modal fade" id="authModal" data-bs-backdrop="static">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content p-4">

          <h4 className="fw-bold text-center mb-3">
            Login / Register
          </h4>

          <input
            className="form-control mb-3"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />

          <select
            className="form-select mb-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
            <option value="admin">Admin</option>
          </select>

          {/* STUDENT EXTRA */}
          {role === "student" && (
            <>
              <input className="form-control mb-2" placeholder="College Name" />
              <select className="form-select mb-2">
                <option>Skill Development</option>
                <option>Career Counselling</option>
                <option>Job Opportunities</option>
              </select>
            </>
          )}

          {/* MENTOR EXTRA */}
          {role === "mentor" && (
            <>
              <input className="form-control mb-2" placeholder="Qualification" />
              <input className="form-control mb-2" placeholder="Experience" />
              <input className="form-control mb-2" placeholder="Skills" />
            </>
          )}

          <button
            className="btn btn-success w-100 mt-3"
            onClick={handleSubmit}
          >
            Continue
          </button>

        </div>
      </div>
    </div>
  );
}

export default AuthModal;