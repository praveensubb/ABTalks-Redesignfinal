function Resources({ challenge }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-5">
        📚 Learning Resources
      </h2>

      <div className="space-y-3">
        {challenge.resources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-indigo-50 rounded-xl p-4 hover:bg-indigo-100 transition duration-300"
          >
            📘 {resource.title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Resources;