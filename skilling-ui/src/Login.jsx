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
        alert("Login Successful ✅");
        navigate("/dashboard");
      } else {
        alert("Invalid credentials ❌");
      }
    } catch (err) {
      console.log(err);
      alert("Server Error ❌");
    }
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
          onClick={handleLogin}
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