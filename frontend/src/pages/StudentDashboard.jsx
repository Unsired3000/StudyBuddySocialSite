
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">📊 Student Dashboard</h1>
      <p className="text-gray-700 mb-2">Welcome to your dashboard. Explore your learning tools and progress below.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <Link
          to="/fields"
          className="bg-green-100 p-4 rounded hover:bg-green-200 text-center"
        >
          📚 Explore Study Fields
        </Link>
        <Link
          to="/profile"
          className="bg-yellow-100 p-4 rounded hover:bg-yellow-200 text-center"
        >
          👤 My Profile
        </Link>
        <Link
          to="/student-dashboard"
          className="bg-blue-100 p-4 rounded hover:bg-blue-200 text-center"
        >
          🧠 AI Study Coach
        </Link>
        <Link
          to="/quiz"
          className="bg-purple-100 p-4 rounded hover:bg-purple-200 text-center"
        >
          📝 Take a Quiz
        </Link>
      </div>
    </div>
  );
}
