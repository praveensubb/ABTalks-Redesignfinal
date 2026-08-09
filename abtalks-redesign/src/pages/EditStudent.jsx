import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudent, updateStudent } from "../services/api";

function EditStudent() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    college: "",
    track: ""
  });

  useEffect(() => {
    loadStudent();
  }, []);

  async function loadStudent() {
    try {
      const data = await getStudent(id);
      setStudent(data);
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await updateStudent(id, student);

      alert("Student updated successfully");

      navigate("/admin");

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-indigo-600 mb-8">
          Edit Student
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            className="w-full border rounded-xl p-3"
            value={student.name}
            onChange={(e)=>
              setStudent({
                ...student,
                name:e.target.value
              })
            }
            placeholder="Name"
          />

          <input
            className="w-full border rounded-xl p-3"
            value={student.email}
            onChange={(e)=>
              setStudent({
                ...student,
                email:e.target.value
              })
            }
            placeholder="Email"
          />

          <input
            className="w-full border rounded-xl p-3"
            value={student.college}
            onChange={(e)=>
              setStudent({
                ...student,
                college:e.target.value
              })
            }
            placeholder="College"
          />

          <input
            className="w-full border rounded-xl p-3"
            value={student.track}
            onChange={(e)=>
              setStudent({
                ...student,
                track:e.target.value
              })
            }
            placeholder="Track"
          />

          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-xl"
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
}

export default EditStudent;