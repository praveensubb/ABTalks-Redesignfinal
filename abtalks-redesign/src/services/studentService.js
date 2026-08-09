import defaultData from "../data/student.json";

const STORAGE_KEY = "abtalks_student";

const tasks = [
  "HTML Portfolio",
  "CSS Landing Page",
  "Responsive Login Page",
  "JavaScript Calculator",
  "Weather App",
  "React Todo App",
  "Movie Search App",
  "Expense Tracker",
  "E-Commerce UI",
  "Chat Application",
  "Blog Website",
  "Responsive Login Page",
  "Responsive Navbar",
  "Admin Dashboard",
  "Portfolio Website",
  "Authentication System",
  "Notes App",
  "Quiz App",
  "Recipe Finder",
  "Final Capstone Project"
];

export function getStudentData() {
  const storedData = localStorage.getItem(STORAGE_KEY);

  if (storedData) {
    return JSON.parse(storedData);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
  return defaultData;
}

export function saveStudentData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function submitChallenge() {
  const data = getStudentData();

  // Stop after all challenges are completed
  if (data.student.completedDays >= data.student.totalDays) {
    return {
      success: false,
      message: "🎉 Congratulations! You have completed all challenges."
    };
  }

  // Update progress
  data.student.streak += 1;
  data.student.completedDays += 1;

  data.student.progress = Math.round(
    (data.student.completedDays / data.student.totalDays) * 100
  );

  // Update today's task
  const nextIndex = data.student.completedDays % tasks.length;
  data.student.todayTask = tasks[nextIndex];

  // Improve rank
  if (data.student.rank > 1) {
    data.student.rank -= 2;
  }

  // Unlock achievements
  if (
    data.student.completedDays === 15 &&
    !data.achievements.includes("🏅 15-Day Warrior")
  ) {
    data.achievements.push("🏅 15-Day Warrior");
  }

  if (
    data.student.completedDays === 30 &&
    !data.achievements.includes("🥇 30-Day Champion")
  ) {
    data.achievements.push("🥇 30-Day Champion");
  }

  if (
    data.student.completedDays === 60 &&
    !data.achievements.includes("👑 60-Day Legend")
  ) {
    data.achievements.push("👑 60-Day Legend");
  }

  data.student.motivationalMessage =
    "Excellent! Tomorrow's challenge is now unlocked.";

  // Save updated data
  saveStudentData(data);

  return {
    success: true,
    data
  };
}

export function resetStudentData() {
  localStorage.removeItem(STORAGE_KEY);
}