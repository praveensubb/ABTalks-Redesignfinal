function Testimonials() {
  const students = [
    {
      name: "Rahul Kumar",
      college: "NIT Surathkal",
      text: "ABTalks helped me stay consistent for 60 days. I built my GitHub profile and gained confidence."
    },
    {
      name: "Ananya S",
      college: "VTU",
      text: "Posting daily on LinkedIn increased my visibility and helped me get internship interviews."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Students Say
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 shadow"
          >
            <p className="text-gray-700 italic">
              "{student.text}"
            </p>

            <div className="mt-6">
              <h3 className="font-bold">{student.name}</h3>
              <p className="text-sm text-gray-500">
                {student.college}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;