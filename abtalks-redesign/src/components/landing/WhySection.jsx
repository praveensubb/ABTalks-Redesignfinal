function WhySection() {
  const features = [
    {
      title: "🔥 Daily Streak",
      description: "Stay consistent by building something every day."
    },
    {
      title: "💻 GitHub Portfolio",
      description: "Grow your GitHub profile with real commits."
    },
    {
      title: "💼 LinkedIn Visibility",
      description: "Share your journey and attract recruiters."
    },
    {
      title: "🏆 Placement Ready",
      description: "Build projects that strengthen your resume."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center">
          Why Students Love ABTalks
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Everything you need to stay consistent and get noticed.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-indigo-50 rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhySection;