function EdgeCaseCard({ student }) {
  if (student.streak === 0) {
    return (
      <div className="bg-blue-100 rounded-3xl p-6 shadow">
        <h2 className="text-xl font-bold">
          🎉 Welcome!
        </h2>

        <p className="mt-3">
          Start your first challenge today and begin your coding journey.
        </p>
      </div>
    );
  }

  if (student.missedYesterday) {
    return (
      <div className="bg-red-100 rounded-3xl p-6 shadow">
        <h2 className="text-xl font-bold">
          ⚠️ Streak Broken
        </h2>

        <p className="mt-3">
          You missed yesterday. Complete today's task to restart your streak.
        </p>
      </div>
    );
  }

  if (!student.linkedin) {
    return (
      <div className="bg-yellow-100 rounded-3xl p-6 shadow">
        <h2 className="text-xl font-bold">
          💼 Complete Your Profile
        </h2>

        <p className="mt-3">
          Add your LinkedIn profile to increase recruiter visibility.
        </p>
      </div>
    );
  }

  return null;
}

export default EdgeCaseCard;