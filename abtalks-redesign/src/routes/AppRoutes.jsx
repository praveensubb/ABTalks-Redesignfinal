import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import ChallengeDay from "../pages/ChallengeDay";
import Certificate from "../pages/Certificate";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Admin from "../pages/Admin";
import AdminLogin from "../pages/AdminLogin";
import Submissions from "../pages/Submissions";
import EditStudent from "../pages/EditStudent";
import Analytics from "../pages/Analytics";
import Profile from "../pages/Profile";
import ChangePassword from "../pages/ChangePassword";
import ForgotPassword from "../pages/ForgotPassword";

import ProtectedRoute from "../components/common/ProtectedRoute";
import AdminProtectedRoute from "../components/common/AdminProtectedRoute";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}

      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Student Protected Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/day/:id"
        element={
          <ProtectedRoute>
            <ChallengeDay />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/change-password"
        element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
      />

      <Route
        path="/certificate"
        element={
          <ProtectedRoute>
            <Certificate />
          </ProtectedRoute>
        }
      />

      {/* Admin Protected Routes */}

      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <Admin />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/submissions"
        element={
          <AdminProtectedRoute>
            <Submissions />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/edit-student/:id"
        element={
          <AdminProtectedRoute>
            <EditStudent />
          </AdminProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <AdminProtectedRoute>
            <Analytics />
          </AdminProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;