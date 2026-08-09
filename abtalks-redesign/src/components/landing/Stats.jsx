function Stats() {
  const stats = [
    {
      number: "10,000+",
      title: "Students Joined",
    },
    {
      number: "600K+",
      title: "GitHub Commits",
    },
    {
      number: "60 Days",
      title: "Challenge Duration",
    },
    {
      number: "500+",
      title: "Placements",
    },
  ];

  return (
    <section className="py-16 bg-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="text-center bg-indigo-500 rounded-xl p-6"
            >

              <h1 className="text-4xl font-bold">
                {item.number}
              </h1>

              <p className="mt-3">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;