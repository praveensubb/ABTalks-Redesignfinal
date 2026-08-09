function AchievementCard() {
  const badges = [
    "🔥 7-Day Streak",
    "💻 First Project",
    "📢 LinkedIn Starter",
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">
        🏆 Achievements
      </h2>

      <div className="space-y-3">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-indigo-50 rounded-xl px-4 py-3 font-medium"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementCard;