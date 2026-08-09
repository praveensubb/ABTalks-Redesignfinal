import { Navigate } from "react-router-dom";

function AdminProtectedRoute({ children }) {

  const isAdmin =
    localStorage.getItem("admin_logged_in") === "true";

  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default AdminProtectedRoute;