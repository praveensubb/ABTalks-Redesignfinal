import { useEffect, useState } from "react";
import { getSubmissions } from "../services/api";

function Submissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    loadSubmissions();
  }, []);

  async function loadSubmissions() {
    try {
      const data = await getSubmissions();
      setSubmissions(data);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-indigo-700 mb-8">
        📋 Challenge Submissions
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-indigo-600 text-white">

              <th className="p-3">ID</th>
              <th className="p-3">Student</th>
              <th className="p-3">Day</th>
              <th className="p-3">GitHub</th>
              <th className="p-3">LinkedIn</th>
              <th className="p-3">Status</th>

            </tr>

          </thead>

          <tbody>

            {submissions.map((submission) => (

              <tr
                key={submission.id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-3">{submission.id}</td>

                <td className="p-3">
                  {submission.student_name}
                </td>

                <td className="p-3">
                  Day {submission.day}
                </td>

                <td className="p-3">
                  <a
                    href={submission.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    GitHub
                  </a>
                </td>

                <td className="p-3">
                  <a
                    href={submission.linkedin_link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    LinkedIn
                  </a>
                </td>

                <td className="p-3">
                  {submission.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Submissions;