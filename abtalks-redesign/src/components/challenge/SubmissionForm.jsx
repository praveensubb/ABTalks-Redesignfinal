import { useState } from "react";
import { submitChallenge } from "../../services/api";

function SubmissionForm() {
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!github || !linkedin) {
      alert("Please fill in both links.");
      return;
    }

    const student = JSON.parse(localStorage.getItem("student"));

    if (!student) {
      alert("Please login first.");
      window.location.href = "/login";
      return;
    }

    try {
      const result = await submitChallenge({
        student_id: student.id,
        day: student.completed_days + 1,
        github_link: github,
        linkedin_link: linkedin,
      });

      // Update local student data
      student.completed_days = result.completed_days;
      student.streak = result.streak;
      student.rank = result.rank;

      localStorage.setItem(
        "student",
        JSON.stringify(student)
      );

      setSubmitted(true);

      // Certificate after Day 60
      if (student.completed_days >= 60) {
        setTimeout(() => {
          window.location.href = "/certificate";
        }, 1500);
        return;
      }

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);

    } catch (error) {
      alert(error.message);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-green-600">
          🎉 Submission Successful
        </h2>

        <p className="mt-3 text-gray-700">
          Great job! Updating your dashboard...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        📤 Submit Today's Work
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block font-medium mb-2">
            GitHub Repository / Commit Link
          </label>

          <input
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/username/repository"
            className="w-full border rounded-xl px-4 py-3"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            LinkedIn Post URL
          </label>

          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/username"
            className="w-full border rounded-xl px-4 py-3"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
        >
          Submit Challenge
        </button>

      </form>

    </div>
  );
}

export default SubmissionForm;