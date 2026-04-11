import { useState } from "react";

function Rrgistr() {
  const [role, setRole] = useState("Student");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="modal fade" id="authModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content p-4 rounded-4">

          <h4 className="text-center mb-3">Create Account</h4>

          {/* ROLE SELECT */}
          <select
            className="form-control mb-3"
            value={role}
            onChange={handleRoleChange}
          >
            <option>Student</option>
            <option>Mentor</option>
            <option>Admin</option>
          </select>

          {/* COMMON FIELDS */}
          <div className="row">
            <div className="col-md-6 mb-2">
              <input className="form-control" placeholder="First Name" />
            </div>
            <div className="col-md-6 mb-2">
              <input className="form-control" placeholder="Last Name" />
            </div>

            <div className="col-md-6 mb-2">
              <input className="form-control" placeholder="Email" />
            </div>
            <div className="col-md-6 mb-2">
              <input className="form-control" placeholder="Mobile Number" />
            </div>

            <div className="col-md-6 mb-2">
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-6 mb-2">
              <select className="form-control">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="col-md-6 mb-2">
              <input className="form-control" placeholder="State" />
            </div>
            <div className="col-md-6 mb-2">
              <input className="form-control" placeholder="District" />
            </div>

            <div className="col-md-6 mb-2">
              <input className="form-control" placeholder="PIN Code" />
            </div>
          </div>

          {/* STUDENT */}
          {role === "Student" && (
            <>
              <select className="form-control mb-2">
                <option>Are you currently in college?</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <input className="form-control mb-2" placeholder="College Name" />

              <select className="form-control mb-2">
                <option>What brings you to platform?</option>
                <option>Skill Development</option>
                <option>Career Counselling</option>
                <option>Job Opportunities</option>
              </select>
            </>
          )}

          {/* MENTOR */}
          {role === "Mentor" && (
            <>
              <input className="form-control mb-2" placeholder="Highest Educational Qualification" />
              <input className="form-control mb-2" placeholder="Professional Certification" />
              <input className="form-control mb-2" placeholder="Current Profession / Designation" />
              <input className="form-control mb-2" placeholder="Total Years of Professional Experience" />
              <input className="form-control mb-2" placeholder="Years of Teaching / Mentoring Experience" />
              <input className="form-control mb-2" placeholder="Sector(s) of Expertise" />
              <input className="form-control mb-2" placeholder="Specific Skills You Can Mentor" />
            </>
          )}

          {/* ADMIN */}
          {role === "Admin" && (
            <>
              <input className="form-control mb-2" placeholder="Email" />
              <input className="form-control mb-2" placeholder="Mobile Number" />
              <input type="password" className="form-control mb-2" placeholder="Password" />
            </>
          )}

          {/* BUTTONS */}
          <div className="d-flex gap-2 mt-3">
            <button className="btn btn-secondary w-50">Cancel</button>
            <button className="btn btn-success w-50">Continue</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Rrgistr;