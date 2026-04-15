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

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Enter email & password ❗");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login Successful ");
        navigate("/Home");
      } else {
        alert(data.message || "Invalid credentials ❌");
      }

    } catch (err) {
      console.log(err);
      alert("Server Error ❌");
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh" }}
    >
      <div className="col-md-4 shadow p-4 rounded-4 bg-white">

        <h3 className="text-center mb-4 fw-bold text-primary">
          Welcome Back 👋
        </h3>

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="form-control mb-3 rounded-pill"
          placeholder="Enter Email"
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="form-control mb-3 rounded-pill"
          placeholder="Enter Password"
        />

        <button
          className="btn btn-primary w-100 rounded-pill py-2"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center mt-3 mb-0">
          Don’t have an account?{" "}
          <span
            style={{ color: "#0d6efd", cursor: "pointer", fontWeight: "500" }}
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