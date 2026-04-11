import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("Student");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    state: "",
    district: "",
    pin: "",
    college: "",
    purpose: "",
    qualification: "",
    profession: "",
    experience: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (!form.firstName || !form.email || !form.mobile) {
      alert("Fill required fields ❗");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, role }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Registered Successfully ✅");
        navigate("/login");
      } else {
        alert(data.message || "Error ❌");
      }

    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("Server Error ❌");
    }
  };

  return (
    <div className="container d-flex justify-content-center py-5">
      <div className="col-md-10 shadow p-4 rounded-4 bg-white">

        <h4 className="text-center mb-4 fw-bold text-success">
          Create Account
        </h4>

        {/* ROLE */}
        <select
          className="form-control mb-4 rounded-pill"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Student</option>
          <option>Mentor</option>
          <option>Admin</option>
        </select>

        {/* COMMON */}
        <div className="row">

          <div className="col-md-6 mb-3">
            <input name="firstName" value={form.firstName} onChange={handleChange} className="form-control rounded-pill" placeholder="First Name" />
          </div>

          <div className="col-md-6 mb-3">
            <input name="lastName" value={form.lastName} onChange={handleChange} className="form-control rounded-pill" placeholder="Last Name" />
          </div>

          <div className="col-md-6 mb-3">
            <input name="email" value={form.email} onChange={handleChange} className="form-control rounded-pill" placeholder="Email" />
          </div>

          <div className="col-md-6 mb-3">
            <input name="mobile" value={form.mobile} onChange={handleChange} className="form-control rounded-pill" placeholder="Mobile" />
          </div>

          <div className="col-md-6 mb-3">
            <input type="date" name="dob" value={form.dob} onChange={handleChange} className="form-control rounded-pill" />
          </div>

          <div className="col-md-6 mb-3">
            <select name="gender" value={form.gender} onChange={handleChange} className="form-control rounded-pill">
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <input name="state" value={form.state} onChange={handleChange} className="form-control rounded-pill" placeholder="State" />
          </div>

          <div className="col-md-6 mb-3">
            <input name="district" value={form.district} onChange={handleChange} className="form-control rounded-pill" placeholder="District" />
          </div>

          <div className="col-md-6 mb-3">
            <input name="pin" value={form.pin} onChange={handleChange} className="form-control rounded-pill" placeholder="PIN Code" />
          </div>

          <div className="col-md-6 mb-3">
            <input type="password" name="password" value={form.password} onChange={handleChange} className="form-control rounded-pill" placeholder="Password" />
          </div>

        </div>

        {/* STUDENT */}
        {role === "Student" && (
          <>
            <input name="college" value={form.college} onChange={handleChange} className="form-control mb-2 rounded-pill" placeholder="College Name" />
            <input name="purpose" value={form.purpose} onChange={handleChange} className="form-control mb-3 rounded-pill" placeholder="Purpose" />
          </>
        )}

        {/* MENTOR */}
        {role === "Mentor" && (
          <>
            <input name="qualification" value={form.qualification} onChange={handleChange} className="form-control mb-2 rounded-pill" placeholder="Qualification" />
            <input name="profession" value={form.profession} onChange={handleChange} className="form-control mb-2 rounded-pill" placeholder="Profession" />
            <input name="experience" value={form.experience} onChange={handleChange} className="form-control mb-3 rounded-pill" placeholder="Experience" />
          </>
        )}

        {/* BUTTONS */}
        <div className="d-flex gap-3 mt-4">
          <button
            className="btn btn-outline-secondary w-50 rounded-pill"
            onClick={() => navigate("/login")}
          >
            Cancel
          </button>

          <button
            className="btn btn-success w-50 rounded-pill"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>

      </div>
    </div>
  );
}

export default Register;