import React from "react";

function Dashboard() {
  return (
    <div className="w-full h-full bg-gray-100 p-6 overflow-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Example cards */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-lg font-semibold text-gray-700">Total Forms</h2>
          <p className="text-3xl font-bold text-indigo-600 mt-2">34</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-lg font-semibold text-gray-700">Employees</h2>
          <p className="text-3xl font-bold text-green-500 mt-2">12</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-lg font-semibold text-gray-700">Pending Tasks</h2>
          <p className="text-3xl font-bold text-yellow-500 mt-2">8</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
          <p className="text-3xl font-bold text-red-500 mt-2">5</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="text-gray-600">📝 John submitted a new form - <span className="text-sm text-gray-400">2 hours ago</span></li>
          <li className="text-gray-600">👩‍💼 New employee added - <span className="text-sm text-gray-400">Yesterday</span></li>
          <li className="text-gray-600">📢 Campaign launched - <span className="text-sm text-gray-400">3 days ago</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
