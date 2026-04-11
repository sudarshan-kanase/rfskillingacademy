import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4 fw-bold text-primary">Login</h2>

      <div className="col-md-4 mx-auto shadow p-4 rounded-4">

        <input
          name="email"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Password"
        />

        <button
          className="btn btn-primary w-100"
            onClick={() => navigate("/Home")}
        >
          Login
        </button>

        {/* 🔥 CLEAN REGISTER LINK */}
        <p className="mt-3">
          Don't have an account?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;