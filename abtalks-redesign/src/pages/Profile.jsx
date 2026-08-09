import { useEffect, useState } from "react";
import { getStudent } from "../services/api";

function Profile() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      const currentUser = JSON.parse(localStorage.getItem("student"));

      if (!currentUser) {
        alert("Please login first.");
        return;
      }

      const data = await getStudent(currentUser.id);
      setStudent(data);
    } catch (error) {
      alert(error.message);
    }
  }

  if (!student) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-indigo-700 mb-8">
          👤 Student Profile
        </h1>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="font-semibold">Name</p>
            <p>{student.name}</p>
          </div>

          <div>
            <p className="font-semibold">Email</p>
            <p>{student.email}</p>
          </div>

          <div>
            <p className="font-semibold">College</p>
            <p>{student.college}</p>
          </div>

          <div>
            <p className="font-semibold">Track</p>
            <p>{student.track}</p>
          </div>

          <div>
            <p className="font-semibold">Completed Days</p>
            <p>{student.completed_days}</p>
          </div>

          <div>
            <p className="font-semibold">Current Streak</p>
            <p>{student.streak}</p>
          </div>

          <div>
            <p className="font-semibold">Rank</p>
            <p>#{student.rank}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;