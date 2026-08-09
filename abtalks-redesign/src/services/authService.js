const USER_KEY = "abtalks_user";
const LOGIN_KEY = "abtalks_logged_in";
const ADMIN_KEY = "admin_logged_in";

// ===============================
// Register Student
// ===============================
export function registerUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

// ===============================
// Student Login
// ===============================
export function loginUser(email, password) {
  const user = JSON.parse(localStorage.getItem(USER_KEY));

  if (!user) {
    return {
      success: false,
      message: "No account found. Please register first."
    };
  }

  if (user.email === email && user.password === password) {

    localStorage.setItem(LOGIN_KEY, "true");
    localStorage.setItem("student", JSON.stringify(user));

    return {
      success: true,
      user
    };
  }

  return {
    success: false,
    message: "Invalid email or password."
  };
}

// ===============================
// Logout (Student + Admin)
// ===============================
export function logoutUser() {
  localStorage.removeItem(LOGIN_KEY);
  localStorage.removeItem("student");
  localStorage.removeItem(ADMIN_KEY);
}

// ===============================
// Check Login
// ===============================
export function isLoggedIn() {

  const studentLoggedIn =
    localStorage.getItem(LOGIN_KEY) === "true" &&
    localStorage.getItem("student") !== null;

  const adminLoggedIn =
    localStorage.getItem(ADMIN_KEY) === "true";

  return studentLoggedIn || adminLoggedIn;
}

// ===============================
// Current Student
// ===============================
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("student"));
}

// ===============================
// Check Admin Login
// ===============================
export function isAdminLoggedIn() {
  return localStorage.getItem(ADMIN_KEY) === "true";
}