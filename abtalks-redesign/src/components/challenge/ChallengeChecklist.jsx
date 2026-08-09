import { useEffect, useState } from "react";

function ChallengeChecklist({ challenge }) {
  const STORAGE_KEY = `checklist_day_${challenge.id}`;

  const defaultChecklist = [
    {
      id: 1,
      text: "Read the challenge description",
      completed: false,
    },
    {
      id: 2,
      text: "Complete the coding task",
      completed: false,
    },
    {
      id: 3,
      text: "Push your code to GitHub",
      completed: false,
    },
    {
      id: 4,
      text: "Share your work on LinkedIn",
      completed: false,
    },
    {
      id: 5,
      text: "Submit today's challenge",
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState(defaultChecklist);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks(defaultChecklist);
    }
  }, [STORAGE_KEY]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, STORAGE_KEY]);

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">
          ✅ Challenge Checklist
        </h2>

        <span className="text-indigo-600 font-semibold">
          {completedCount}/{tasks.length}
        </span>
      </div>

      <div className="space-y-4">

        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-5 h-5 accent-indigo-600"
            />

            <span
              className={
                task.completed
                  ? "line-through text-gray-400"
                  : "text-gray-700"
              }
            >
              {task.text}
            </span>
          </label>
        ))}

      </div>

      <div className="mt-6">

        <div className="w-full bg-gray-200 rounded-full h-3">

          <div
            className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
            style={{
              width: `${(completedCount / tasks.length) * 100}%`,
            }}
          ></div>

        </div>

      </div>

    </div>
  );
}

export default ChallengeChecklist;