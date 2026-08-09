import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAdminDashboard,
  deleteStudent,
  resetStudentProgress,
} from "../services/api";

const API_URL = "https://abtalks-redesignfinal.onrender.com";

function Admin() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard(searchText = "") {
  try {
    const result = await getAdminDashboard(searchText);
    setData(result);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);

      alert("Student deleted successfully.");

      loadDashboard(search);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleReset(id) {
    const confirmReset = window.confirm(
      "Reset this student's progress?"
    );

    if (!confirmReset) return;

    try {
      await resetStudentProgress(id);

      alert("Student progress reset successfully.");

      loadDashboard(search);
    } catch (error) {
      alert(error.message);
    }
  }

  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);
    loadDashboard(value);
  }

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-indigo-700 mb-8">
        👨‍💼 Admin Dashboard
      </h1>

      {/* Navigation */}

      <div className="flex gap-4 mb-8 flex-wrap">

        <Link
          to="/submissions"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700"
        >
          📋 Challenge Submissions
        </Link>

        <Link
          to="/analytics"
          className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
        >
          📊 Analytics
        </Link>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-2 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold">
            Total Students
          </h2>

          <p className="text-5xl font-bold text-indigo-600 mt-4">
            {data.total_students}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold">
            Completed Challenges
          </h2>

          <p className="text-5xl font-bold text-green-600 mt-4">
            {data.total_completed_challenges}
          </p>
        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

        <input
          type="text"
          placeholder="🔍 Search Student..."
          value={search}
          onChange={handleSearch}
          className="w-full border rounded-xl px-4 py-3"
        />

      </div>

      {/* Students */}

      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

        <h2 className="text-2xl font-bold mb-5">
          Registered Students
        </h2>

        <table className="w-full">

          <thead>

            <tr className="bg-indigo-600 text-white">

              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">College</th>
              <th className="p-3">Track</th>
              <th className="p-3">Completed Days</th>
              <th className="p-3">Streak</th>
              <th className="p-3">Actions</th>

            </tr>

          </thead>

          <tbody>

            {data.students.map((student) => (

              <tr
                key={student.id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-3">{student.id}</td>

                <td className="p-3">{student.name}</td>

                <td className="p-3">{student.email}</td>

                <td className="p-3">{student.college}</td>

                <td className="p-3">{student.track}</td>

                <td className="p-3">{student.completed_days}</td>

                <td className="p-3">{student.streak}</td>

                <td className="p-3">

                  <div className="flex gap-2 flex-wrap">

                    <Link
                      to={`/edit-student/${student.id}`}
                      className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600"
                    >
                      ✏️ Edit
                    </Link>

                    <button
                      onClick={() => handleReset(student.id)}
                      className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
                    >
                      🔄 Reset
                    </button>

                    <button
                      onClick={() => handleDelete(student.id)}
                      className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                    >
                      🗑 Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Admin;