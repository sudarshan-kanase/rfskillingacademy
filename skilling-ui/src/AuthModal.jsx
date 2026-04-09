import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthModal() {
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.firstName) {
      alert("Please enter first name");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        role,
        ...form,
        login: true,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="modal fade" id="authModal" data-bs-backdrop="static">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 shadow">

          <h4 className="fw-bold text-center mb-4 text-primary">
            Create Account 🚀
          </h4>

          {/* ROLE */}
          <select
            className="form-select mb-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
            <option value="admin">Admin</option>
          </select>

          {/* COMMON */}
          <div className="row">
            <div className="col-md-6 mb-2">
              <input name="firstName" onChange={handleChange} className="form-control" placeholder="First Name" />
            </div>

            <div className="col-md-6 mb-2">
              <input name="lastName" onChange={handleChange} className="form-control" placeholder="Last Name" />
            </div>

            <div className="col-md-6 mb-2">
              <input name="email" onChange={handleChange} className="form-control" placeholder="Email" />
            </div>

            <div className="col-md-6 mb-2">
              <input name="mobile" onChange={handleChange} className="form-control" placeholder="Mobile Number" />
            </div>

            <div className="col-md-6 mb-2">
              <input type="date" name="dob" onChange={handleChange} className="form-control" />
            </div>

            <div className="col-md-6 mb-2">
              <select name="gender" onChange={handleChange} className="form-select">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="col-md-6 mb-2">
              <input name="state" onChange={handleChange} className="form-control" placeholder="State" />
            </div>

            <div className="col-md-6 mb-2">
              <input name="district" onChange={handleChange} className="form-control" placeholder="District" />
            </div>

            <div className="col-md-6 mb-2">
              <input name="pin" onChange={handleChange} className="form-control" placeholder="PIN Code" />
            </div>
          </div>

          {/* STUDENT */}
          {role === "student" && (
            <>
              <select name="collegeStatus" onChange={handleChange} className="form-select mb-2">
                <option>Are you currently in college?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <input
                name="collegeName"
                onChange={handleChange}
                className="form-control mb-2"
                placeholder="College Name"
              />
            </>
          )}

          {/* BUTTONS */}
          <div className="d-flex gap-2 mt-3">

            <button
              className="btn btn-outline-secondary w-50"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>

            <button
              className="btn btn-primary w-50"
              onClick={handleSubmit}
            >
              Continue
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default AuthModal;