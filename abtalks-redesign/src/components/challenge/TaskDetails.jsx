function TaskDetails({ challenge }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold">
        📋 Challenge Description
      </h2>

      <p className="mt-4 text-gray-600 leading-7">
        {challenge.description}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">

        <div className="bg-indigo-50 rounded-xl p-4">

          <p className="text-gray-500">
            Difficulty
          </p>

          <h3 className="font-bold text-orange-500">
            {challenge.difficulty}
          </h3>

        </div>

        <div className="bg-indigo-50 rounded-xl p-4">

          <p className="text-gray-500">
            Duration
          </p>

          <h3 className="font-bold">
            {challenge.duration}
          </h3>

        </div>

      </div>

      <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">

        <h3 className="font-bold text-green-700 mb-2">
          🎯 Goal
        </h3>

        <p className="text-gray-700">
          Complete this challenge, upload your GitHub repository,
          share your work on LinkedIn, and submit it to continue your
          coding streak.
        </p>

      </div>

    </div>
  );
}

export default TaskDetails;