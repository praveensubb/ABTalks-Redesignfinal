import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../../services/authService";

function Navbar() {
  const navigate = useNavigate();

  const loggedIn = isLoggedIn();

  // Check admin login
  const isAdmin =
    localStorage.getItem("admin_logged_in") === "true";

  // Debug (remove after testing)
  console.log("Logged In:", loggedIn);
  console.log("Admin Flag:", localStorage.getItem("admin_logged_in"));
  console.log("Is Admin:", isAdmin);

  const handleLogout = () => {
    logoutUser();

    // Remove admin login flag
    localStorage.removeItem("admin_logged_in");

    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-indigo-600"
        >
          ABTalks
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">

          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>

          {loggedIn && (
            <>
              <Link to="/dashboard" className="hover:text-indigo-600">
                Dashboard
              </Link>

              <Link to="/day/1" className="hover:text-indigo-600">
                Challenge
              </Link>

              <Link to="/profile" className="hover:text-indigo-600">
                Profile
              </Link>

              <Link to="/change-password" className="hover:text-indigo-600">
                Change Password
              </Link>

              {isAdmin && (
                <Link
                  to="/admin"
                  className="text-red-600 font-semibold hover:text-red-700"
                >
                  Admin
                </Link>
              )}

              <Link to="/certificate" className="hover:text-indigo-600">
                Certificate
              </Link>
            </>
          )}
        </div>

        {/* Login / Logout */}
        {loggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
          >
            Login
          </Link>
        )}

      </div>
    </nav>
  );
}

export default Navbar;