const API_URL = "https://abtalks-redesignfinal.onrender.com";

// =======================================
// Student Register
// =======================================
export async function registerUser(user) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Registration failed");
  }

  return data;
}

// =======================================
// Student Login
// =======================================
export async function loginUser(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Login failed");
  }

  return data;
}

// =======================================
// Submit Challenge
// =======================================
export async function submitChallenge(challengeData) {
  const response = await fetch(`${API_URL}/challenge/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(challengeData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Challenge submission failed");
  }

  return data;
}

// =======================================
// Get Student
// =======================================
export async function getStudent(studentId) {
  const response = await fetch(
    `${API_URL}/student/${studentId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Unable to fetch student");
  }

  return data;
}

// =======================================
// Leaderboard
// =======================================
export async function getLeaderboard() {
  const response = await fetch(
    `${API_URL}/leaderboard`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Unable to fetch leaderboard");
  }

  return data;
}

// =======================================
// Certificate
// =======================================
export async function getCertificate(studentId) {
  const response = await fetch(
    `${API_URL}/certificate/${studentId}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Certificate unavailable");
  }

  return data;
}

// =======================================
// Admin Login
// =======================================
export async function adminLogin(username, password) {
  const response = await fetch(`${API_URL}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Admin login failed");
  }

  return data;
}

// =======================================
// Delete Student
// =======================================
export async function deleteStudent(studentId) {
  const response = await fetch(
    `${API_URL}/admin/student/${studentId}`,
    {
      method: "DELETE",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Delete failed");
  }

  return data;
}

// =======================================
// Update Student
// =======================================
export async function updateStudent(studentId, studentData) {
  const response = await fetch(
    `${API_URL}/admin/student/${studentId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Update failed");
  }

  return data;
}

// =======================================
// Reset Student Progress
// =======================================
export async function resetStudentProgress(studentId) {
  const response = await fetch(
    `${API_URL}/admin/student/${studentId}/reset`,
    {
      method: "PUT",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Reset failed");
  }

  return data;
}

// =======================================
// Get All Challenge Submissions
// =======================================
export async function getSubmissions() {
  const response = await fetch(
    `${API_URL}/admin/submissions`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Unable to fetch submissions");
  }

  return data;
}
// ===============================
// Analytics
// ===============================
export async function getAnalytics() {
  const response = await fetch(
    `${API_URL}/admin/analytics`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error("Unable to load analytics");
  }

  return data;
}
// ===============================
// Change Password
// ===============================
export async function changePassword(passwordData) {
  const response = await fetch(
    `${API_URL}/auth/change-password`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Password change failed");
  }

  return data;
}
// ===============================
// Forgot Password
// ===============================
export async function forgotPassword(email, newPassword) {

  const response = await fetch(
    `${API_URL}/auth/forgot-password`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        new_password: newPassword,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Password reset failed");
  }

  return data;
}
// =======================================
// Admin Dashboard
// =======================================
export async function getAdminDashboard(search = "") {
  const response = await fetch(
    `${API_URL}/admin/dashboard?search=${encodeURIComponent(search)}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Unable to load dashboard");
  }

  return data;
}