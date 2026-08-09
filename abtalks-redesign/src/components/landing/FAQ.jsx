function FAQ() {
  const faqs = [
    {
      question: "What is ABTalks?",
      answer:
        "ABTalks is a 60-day coding challenge that helps students build projects consistently and showcase their work on GitHub and LinkedIn."
    },
    {
      question: "Do I need GitHub?",
      answer:
        "Yes. Every day's work is submitted using a GitHub repository or commit link."
    },
    {
      question: "What if I miss a day?",
      answer:
        "Your streak resets, but you can restart the challenge and continue learning."
    },
    {
      question: "Is this free?",
      answer:
        "Yes. Students can join and participate in the challenge."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6"
            >

              <h3 className="font-bold text-xl">
                {faq.question}
              </h3>

              <p className="text-gray-600 mt-3">
                {faq.answer}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;