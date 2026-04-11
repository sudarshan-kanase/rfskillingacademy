import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="container py-5">
      <div className="col-md-6 mx-auto shadow p-4 rounded-4 bg-white">

        <h3 className="text-center mb-4 text-primary">My Profile</h3>

        <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>State:</strong> {user.state}</p>
        <p><strong>District:</strong> {user.district}</p>

        {/* Student */}
        {user.role === "Student" && (
          <>
            <p><strong>College:</strong> {user.college}</p>
            <p><strong>Purpose:</strong> {user.purpose}</p>
          </>
        )}

        {/* Mentor */}
        {user.role === "Mentor" && (
          <>
            <p><strong>Qualification:</strong> {user.qualification}</p>
            <p><strong>Profession:</strong> {user.profession}</p>
            <p><strong>Experience:</strong> {user.experience}</p>
          </>
        )}

        <button
          className="btn btn-danger w-100 mt-4 rounded-pill"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Profile;