import { useParams } from "react-router-dom";
import challenges from "../data/challenges.json";

import Navbar from "../components/common/Navbar";
import ChallengeHeader from "../components/challenge/ChallengeHeader";
import TaskDetails from "../components/challenge/TaskDetails";
import ChallengeChecklist from "../components/challenge/ChallengeChecklist";
import Resources from "../components/challenge/Resources";
import SubmissionForm from "../components/challenge/SubmissionForm";

function ChallengeDay() {
  const { id } = useParams();

  const challenge = challenges.find(
    (item) => item.id === Number(id)
  );

  if (!challenge) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-3xl font-bold text-red-600">
            Challenge Not Found
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 pt-24 pb-10 px-4">
        <div className="max-w-md mx-auto space-y-5">

          <ChallengeHeader challenge={challenge} />

          <ChallengeChecklist challenge={challenge} />

          <TaskDetails challenge={challenge} />

          <Resources challenge={challenge} />

          <SubmissionForm />

        </div>
      </div>
    </>
  );
}

export default ChallengeDay;