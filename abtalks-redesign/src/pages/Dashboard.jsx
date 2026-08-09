import { useEffect, useState } from "react";

import Navbar from "../components/common/Navbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import EdgeCaseCard from "../components/dashboard/EdgeCaseCard";
import StreakCard from "../components/dashboard/StreakCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import TaskCard from "../components/dashboard/TaskCard";
import AchievementCard from "../components/dashboard/AchievementCard";
import LeaderboardCard from "../components/dashboard/LeaderboardCard";
import MotivationCard from "../components/dashboard/MotivationCard";

import { getStudent } from "../services/api";
import defaultData from "../data/student.json";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadStudent();
  }, []);

  async function loadStudent() {
    try {
      const loggedUser = JSON.parse(localStorage.getItem("student"));

      if (!loggedUser) {
        window.location.href = "/login";
        return;
      }

      const student = await getStudent(loggedUser.id);

      const dashboardData = { ...defaultData };

      dashboardData.student = {
        ...dashboardData.student,
        name: student.name,
        email: student.email,
        college: student.college,
        track: student.track,
        completedDays: student.completed_days,
        streak: student.streak,
        rank: student.rank,
        progress: Math.round(
          (student.completed_days / 60) * 100
        ),
      };

      setData(dashboardData);

    } catch (error) {
      alert(error.message);
    }
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-24 pb-10 px-4">
        <div className="max-w-md mx-auto space-y-5">

          <WelcomeCard student={data.student} />

          <EdgeCaseCard student={data.student} />

          <div className="grid grid-cols-2 gap-4">
            <StreakCard student={data.student} />
            <ProgressCard student={data.student} />
          </div>

          <TaskCard student={data.student} />

          <AchievementCard achievements={data.achievements} />

          <LeaderboardCard />

          <MotivationCard student={data.student} />

        </div>
      </div>
    </>
  );
}

export default Dashboard;