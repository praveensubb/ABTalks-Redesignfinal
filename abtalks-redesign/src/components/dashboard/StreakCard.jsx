function StreakCard({ student }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 text-center">

      <h2 className="font-bold text-lg">
        🔥 Current Streak
      </h2>

      <h1 className="text-5xl font-bold text-orange-500 mt-5">
        {student.streak}
      </h1>

      <p className="text-gray-500">
        Days
      </p>

    </div>
  );
}

export default StreakCard;