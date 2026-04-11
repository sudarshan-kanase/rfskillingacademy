import { useState } from "react";

function Register() {
  const [role, setRole] = useState("Student");

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
    password: ""
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...form, role })
      });

      const data = await res.json();

      if (data.success) {
        alert("Registered Successfully ✅");
      } else {
        alert("Error ❌");
      }

    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("Server Error ❌");
    }
  };

  return (
    <div className="container py-5">
      <div className="col-md-8 mx-auto shadow p-4 rounded-4">

        <h4 className="text-center mb-3">Create Account</h4>

        {/* ROLE */}
        <select
          className="form-control mb-3"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Student</option>
          <option>Mentor</option>
          <option>Admin</option>
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
            <input name="mobile" onChange={handleChange} className="form-control" placeholder="Mobile" />
          </div>

          <div className="col-md-6 mb-2">
            <input type="date" name="dob" onChange={handleChange} className="form-control" />
          </div>

          <div className="col-md-6 mb-2">
            <select name="gender" onChange={handleChange} className="form-control">
              <option value="">Gender</option>
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
        {role === "Student" && (
          <>
            <input name="college" onChange={handleChange} className="form-control mb-2" placeholder="College Name" />
            <input name="purpose" onChange={handleChange} className="form-control mb-2" placeholder="Purpose" />
          </>
        )}

        {/* MENTOR */}
        {role === "Mentor" && (
          <>
            <input name="qualification" onChange={handleChange} className="form-control mb-2" placeholder="Qualification" />
            <input name="profession" onChange={handleChange} className="form-control mb-2" placeholder="Profession" />
            <input name="experience" onChange={handleChange} className="form-control mb-2" placeholder="Experience" />
          </>
        )}

        {/* ADMIN */}
        {role === "Admin" && (
          <>
            <input name="password" type="password" onChange={handleChange} className="form-control mb-2" placeholder="Password" />
          </>
        )}

        {/* BUTTONS */}
        <div className="d-flex gap-2 mt-3">
          <button className="btn btn-secondary w-50">
            Cancel
          </button>

          <button className="btn btn-success w-50" onClick={handleRegister}>
            Register
          </button>
        </div>

      </div>
    </div>
  );
}

export default Register;