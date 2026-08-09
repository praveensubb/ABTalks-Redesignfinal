import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAnalytics } from "../services/api";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {
  Bar,
  Pie,
  Line,
} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadAnalytics();
  }, []);

  async function loadAnalytics() {
    try {
      const result = await getAnalytics();
      setData(result);
    } catch (error) {
      console.error(error);
      alert("Unable to load analytics");
    }
  }

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        Loading Analytics...
      </div>
    );
  }

  // ----------------------------
  // Chart Data
  // ----------------------------

  const barData = {
    labels: [
      "Students",
      "Completed",
      "Certificates",
    ],
    datasets: [
      {
        label: "Statistics",
        data: [
          data.total_students,
          data.completed_challenges,
          data.certificates,
        ],
        backgroundColor: [
          "#4F46E5",
          "#16A34A",
          "#EA580C",
        ],
      },
    ],
  };

  const pieData = {
    labels: [
      "Completed",
      "Remaining",
    ],
    datasets: [
      {
        data: [
          data.completed_challenges,
          Math.max(
            data.total_students * 60 -
              data.completed_challenges,
            0
          ),
        ],
        backgroundColor: [
          "#22C55E",
          "#EF4444",
        ],
      },
    ],
  };

  const lineData = {
    labels: data.top_students.map(
      (student) => student.name
    ),

    datasets: [
      {
        label: "Completed Days",
        data: data.top_students.map(
          (student) => student.completed_days
        ),
        borderColor: "#4F46E5",
        backgroundColor: "#4F46E5",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold text-indigo-700">
          📊 Analytics Dashboard
        </h1>

        <Link
          to="/admin"
          className="bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700"
        >
          ← Back to Admin
        </Link>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold">
            Total Students
          </h2>

          <p className="text-4xl font-bold text-indigo-600 mt-4">
            {data.total_students}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold">
            Completed Challenges
          </h2>

          <p className="text-4xl font-bold text-green-600 mt-4">
            {data.completed_challenges}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold">
            Highest Streak
          </h2>

          <p className="text-4xl font-bold text-blue-600 mt-4">
            {data.highest_streak}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold">
            Certificates Issued
          </h2>

          <p className="text-4xl font-bold text-orange-600 mt-4">
            {data.certificates}
          </p>
        </div>

      </div>

      {/* Average Progress */}

      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          📈 Average Progress
        </h2>

        <p className="text-3xl font-bold text-green-600">
          {Number(data.average_progress).toFixed(2)} Days
        </p>

      </div>

      {/* Top Students */}

      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-5">
          🏆 Top 5 Students
        </h2>

        <table className="w-full">

          <thead>

            <tr className="bg-indigo-600 text-white">

              <th className="p-3">Rank</th>
              <th className="p-3">Name</th>
              <th className="p-3">Completed Days</th>
              <th className="p-3">Streak</th>

            </tr>

          </thead>

          <tbody>

            {data.top_students.map((student, index) => (

              <tr
                key={student.id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-3">
                  #{index + 1}
                </td>

                <td className="p-3">
                  {student.name}
                </td>

                <td className="p-3">
                  {student.completed_days}
                </td>

                <td className="p-3">
                  {student.streak}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Charts */}

      <div className="grid md:grid-cols-2 gap-8 mt-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-xl font-bold mb-5">
            📊 Student Statistics
          </h2>

          <Bar data={barData} />

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-xl font-bold mb-5">
            🥧 Challenge Progress
          </h2>

          <Pie data={pieData} />

        </div>

      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-xl font-bold mb-5">
          📈 Top Students Progress
        </h2>

        <Line data={lineData} />

      </div>

    </div>
  );
}

export default Analytics;