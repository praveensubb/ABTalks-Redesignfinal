import { useEffect, useState } from "react";
import { getLeaderboard } from "../../services/api";

function LeaderboardCard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    loadLeaderboard();
  }, []);

  async function loadLeaderboard() {
    try {
      const data = await getLeaderboard();
      setLeaderboard(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-5">
        🏆 Leaderboard
      </h2>

      {leaderboard.length === 0 ? (
        <p className="text-gray-500">
          No students found.
        </p>
      ) : (
        <div className="space-y-4">

          {leaderboard.map((student) => (
            <div
              key={student.rank}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <h3 className="font-semibold">
                  #{student.rank} {student.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {student.college}
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold text-indigo-600">
                  {student.completed_days} Days
                </p>

                <p className="text-xs text-gray-500">
                  🔥 {student.streak} Streak
                </p>
              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default LeaderboardCard;