import { Link } from "react-router-dom";

function TaskCard({ student }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="font-bold text-xl">
        📋 Today's Task
      </h2>

      <p className="mt-4 text-gray-600">
        {student.todayTask}
      </p>

      <Link
  to={`/day/${student.completedDays + 1}`}
  className="block text-center mt-6 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
>
  Continue Challenge
</Link>

    </div>
  );
}

export default TaskCard;