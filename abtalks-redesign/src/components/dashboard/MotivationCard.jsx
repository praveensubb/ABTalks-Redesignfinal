function MotivationCard() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-6 text-white">

      <h2 className="text-xl font-bold">
        🤖 AI Motivation
      </h2>

      <p className="mt-4 leading-7">
        Amazing consistency! You're only
        <span className="font-bold">
          {" "}3 days away
        </span>
        {" "}from entering the Top 50 leaderboard.
      </p>

    </div>
  );
}

export default MotivationCard;