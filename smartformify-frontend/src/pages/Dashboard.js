import React from "react";
import {
  BarChart2,
  LayoutDashboard,
  Settings,
  FileText,
  PlusCircle,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white via-sky-50 to-slate-100 text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="fixed md:static md:w-64 bg-white border-r border-gray-200 shadow-md p-6 z-10 min-h-screen">
        <div className="text-3xl font-bold text-sky-600 mb-10 tracking-tight">SmartFormify</div>
        <nav className="space-y-6 text-[16px]">
          <a href="/dashboard" className="flex items-center gap-3 text-sky-700 font-semibold hover:text-sky-900">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="/create" className="flex items-center gap-3 text-gray-700 hover:text-sky-600">
            <PlusCircle size={20} /> Create Form
          </a>
          <a href="/submissions" className="flex items-center gap-3 text-gray-700 hover:text-sky-600">
            <FileText size={20} /> Submissions
          </a>
          <a href="/settings" className="flex items-center gap-3 text-gray-700 hover:text-sky-600">
            <Settings size={20} /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:ml-64 bg-slate-50">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-sky-700">Dashboard</h1>
          <button className="border border-sky-500 text-sky-700 px-4 py-2 rounded-md hover:bg-sky-50">Logout</button>
        </header>

        {/* Analytics Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white shadow-md border border-gray-100 rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Total Forms</div>
            <div className="text-3xl font-semibold text-gray-800">12</div>
          </div>
          <div className="bg-white shadow-md border border-gray-100 rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Total Submissions</div>
            <div className="text-3xl font-semibold text-gray-800">548</div>
          </div>
          <div className="bg-white shadow-md border border-gray-100 rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Avg. Responses</div>
            <div className="text-3xl font-semibold text-gray-800">45.6</div>
          </div>
          <div className="bg-white shadow-md border border-gray-100 rounded-xl p-6">
            <div className="text-sm text-gray-500 mb-1">Bounce Rate</div>
            <div className="text-3xl font-semibold text-gray-800">12%</div>
          </div>
        </section>

        {/* Chart Placeholder */}
        <section className="bg-white shadow-lg border border-gray-100 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-sky-700">
              <BarChart2 size={22} /> Submission Trends
            </h2>
            <button className="text-sky-600 hover:text-sky-800 text-sm">View Details</button>
          </div>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            [Insert Chart Here]
          </div>
        </section>
      </main>
    </div>
  );
}
