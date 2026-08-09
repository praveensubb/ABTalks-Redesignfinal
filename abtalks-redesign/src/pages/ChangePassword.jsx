import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../services/api";

function ChangePassword() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      const student = JSON.parse(localStorage.getItem("student"));

      if (!student) {
        navigate("/login");
        return;
      }

      await changePassword({
        student_id: student.id,
        old_password: oldPassword,
        new_password: newPassword,
      });

      alert("Password changed successfully.");

      navigate("/profile");

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-lg">

        <h1 className="text-4xl font-bold text-indigo-700 mb-8 text-center">
          🔒 Change Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>

            <label className="block mb-2 font-semibold">
              Old Password
            </label>

            <input
              type="password"
              value={oldPassword}
              onChange={(e) =>
                setOldPassword(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-3"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              New Password
            </label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) =>
                setNewPassword(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-3"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-semibold">
              Confirm New Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="w-full border rounded-xl px-4 py-3"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
          >
            Change Password
          </button>

        </form>

      </div>

    </div>
  );
}

export default ChangePassword;