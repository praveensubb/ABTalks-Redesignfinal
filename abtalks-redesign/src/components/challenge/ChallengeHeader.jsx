function ChallengeHeader({ challenge }) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 text-white rounded-3xl shadow-lg p-8">

      <p className="text-lg font-medium">
        📅 Day {challenge.id}
      </p>

      <h1 className="text-3xl font-bold mt-3">
        {challenge.title}
      </h1>

      <p className="mt-4 text-indigo-100">
        {challenge.description}
      </p>

      <div className="flex justify-between mt-6">

        <div className="bg-white/20 rounded-xl px-4 py-2">
          <p className="text-sm">
            Difficulty
          </p>

          <h3 className="font-bold">
            {challenge.difficulty}
          </h3>
        </div>

        <div className="bg-white/20 rounded-xl px-4 py-2">
          <p className="text-sm">
            Duration
          </p>

          <h3 className="font-bold">
            {challenge.duration}
          </h3>
        </div>

      </div>

    </div>
  );
}

export default ChallengeHeader;