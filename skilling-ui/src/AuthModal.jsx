import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthModal() {
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  // AUTO OPEN MODAL IF NOT LOGGED IN
 useEffect(() => {
  const user = localStorage.getItem("user");

  if (!user) {
    const modal = document.getElementById("authModal");
    modal.classList.add("show");
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  }
}, []);

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
        <div className="modal-content p-4">

          <h4 className="fw-bold text-center mb-4">
            Create Account
          </h4>

          {/* ROLE SELECT */}
          <select
            className="form-select mb-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
            <option value="admin">Admin</option>
          </select>

          {/* COMMON FIELDS */}
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

          {/* STUDENT EXTRA */}
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

              <select
                name="purpose"
                onChange={handleChange}
                className="form-select mb-2"
              >
                <option>What brings you to platform?</option>
                <option>Skill Development</option>
                <option>Career Counselling</option>
                <option>Job Opportunities</option>
              </select>
            </>
          )}

          {/* MENTOR EXTRA */}
          {role === "mentor" && (
            <>
              <input name="qualification" onChange={handleChange} className="form-control mb-2" placeholder="Highest Educational Qualification" />
              <input name="certification" onChange={handleChange} className="form-control mb-2" placeholder="Professional Certification" />
              <input name="profession" onChange={handleChange} className="form-control mb-2" placeholder="Current Profession / Designation" />
              <input name="totalExp" onChange={handleChange} className="form-control mb-2" placeholder="Total Years of Professional Experience" />
              <input name="teachingExp" onChange={handleChange} className="form-control mb-2" placeholder="Years of Teaching / Mentoring Experience" />
              <input name="sector" onChange={handleChange} className="form-control mb-2" placeholder="Sector(s) of Expertise" />
              <input name="skills" onChange={handleChange} className="form-control mb-2" placeholder="Specific Skills You Can Mentor" />
            </>
          )}

          {/* ADMIN EXTRA */}
          {role === "admin" && (
            <>
              <input name="adminMobile" onChange={handleChange} className="form-control mb-2" placeholder="Mobile Number" />
              <input name="adminEmail" onChange={handleChange} className="form-control mb-2" placeholder="Email" />
              <input type="password" name="adminPassword" onChange={handleChange} className="form-control mb-2" placeholder="Password" />
            </>
          )}

          <div className="d-flex gap-2 mt-3">

  <button
    className="btn btn-secondary w-50"
    onClick={() => {
      const modal = document.getElementById("authModal");
      modal.classList.remove("show");
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }}
  >
    Cancel
  </button>

  <button
    className="btn btn-success w-50"
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