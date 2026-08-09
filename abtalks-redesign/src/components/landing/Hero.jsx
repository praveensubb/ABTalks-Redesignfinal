import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block bg-white/20 backdrop-blur-md px-5 py-2 rounded-full text-sm font-medium">
              🚀 India's #1 60-Day Coding Challenge
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-8">
              Build Every Day.
              <br />
              Become{" "}
              <span className="text-yellow-300">
                Job Ready
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-200 leading-8 max-w-xl">
              Join thousands of students building real-world projects,
              maintaining GitHub streaks, sharing progress on LinkedIn,
              and becoming job-ready through daily consistency.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/register"
                className="bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition duration-300"
              >
                🚀 Start 60-Day Challenge
              </Link>

              <Link
                to="/login"
                className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-700 transition duration-300"
              >
                🔐 Login
              </Link>

            </div>

            <div className="flex flex-wrap gap-8 mt-12">

              <div>
                <h2 className="text-3xl font-bold">10K+</h2>
                <p className="text-gray-200">Students</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">600K+</h2>
                <p className="text-gray-200">GitHub Commits</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-gray-200">Placements</p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="bg-white text-black rounded-3xl shadow-2xl p-8 w-full max-w-md">

              <h2 className="text-2xl font-bold text-indigo-700 mb-8">
                📈 Today's Progress
              </h2>

              <div className="flex justify-between mb-3">
                <span className="font-medium">Current Streak</span>
                <span className="font-bold">🔥 60 Days</span>
              </div>

              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-indigo-600 h-4 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>

              <div className="bg-indigo-50 rounded-2xl p-5 mt-8">

                <h3 className="font-bold text-lg">
                  🎯 Goal
                </h3>

                <p className="text-gray-600 mt-2">
                  Complete all 60 coding challenges and earn your certificate.
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-green-100 rounded-xl p-4 text-center">

                  <h3 className="text-2xl font-bold text-green-700">
                    60
                  </h3>

                  <p className="text-sm text-gray-600">
                    Challenge Days
                  </p>

                </div>

                <div className="bg-yellow-100 rounded-xl p-4 text-center">

                  <h3 className="text-2xl font-bold text-yellow-700">
                    🏆
                  </h3>

                  <p className="text-sm text-gray-600">
                    Certificate
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;