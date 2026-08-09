function Features() {
  const features = [
    {
      emoji: "🔥",
      title: "Daily Streak",
      desc: "Stay consistent by coding every day."
    },
    {
      emoji: "💻",
      title: "GitHub Proof",
      desc: "Show recruiters your real coding work."
    },
    {
      emoji: "🌐",
      title: "LinkedIn Visibility",
      desc: "Build your professional profile daily."
    },
    {
      emoji: "🏆",
      title: "Achievements",
      desc: "Earn badges and climb the leaderboard."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why Choose ABTalks?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition"
          >
            <div className="text-5xl mb-4">{item.emoji}</div>
            <h3 className="font-bold text-xl mb-3">{item.title}</h3>
            <p className="text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;