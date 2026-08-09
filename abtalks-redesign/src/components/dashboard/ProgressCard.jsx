function ProgressCard({ student }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="font-bold">
        📈 Challenge Progress
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-4 mt-5">

        <div
          className="bg-indigo-600 h-4 rounded-full"
          style={{ width: `${student.progress}%` }}
        ></div>

      </div>

      <p className="mt-4 text-gray-600">
        {student.completedDays} / {student.totalDays} Days
      </p>

    </div>
  );
}

export default ProgressCard;