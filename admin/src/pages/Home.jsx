import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import {
  UserCog,
  BookOpen,
  Bus,
  Building,
  Library,
  Wallet,
  Users,
} from "lucide-react"; // professional icons
import Chatbot from "../components/ChatBot";

const AdminDashboard = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-6 text-center border-b border-blue-700">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-sm mt-1 text-blue-200">
            Welcome, {user?.name || "Admin"}
          </p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/teachers"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <UserCog size={20} /> Teachers
          </Link>
          <Link
            to="/staff"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Users size={20} /> Staff
          </Link>
          <Link
            to="/accounts"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Wallet size={20} /> Accounts
          </Link>
          <Link
            to="/library"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Library size={20} /> Library
          </Link>
          <Link
            to="/hostel"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Building size={20} /> Hostel
          </Link>
          <Link
            to="/transport"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Bus size={20} /> Transport
          </Link>
        </nav>
        <div className="p-4 border-t border-blue-700 text-center text-sm text-blue-200">
          © 2025 DTE Rajasthan
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800">
            Administration Dashboard
          </h2>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium shadow">
            Logged in as {user.name}
          </div>
        </header>

        {/* Dashboard Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Teachers</h3>
            <p className="text-gray-600 mt-2">
              Manage teacher records, subjects, and allocations.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Staff</h3>
            <p className="text-gray-600 mt-2">
              Manage non-teaching staff details and assignments.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Accounts</h3>
            <p className="text-gray-600 mt-2">
              Handle fee management, salaries, and transactions.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Library</h3>
            <p className="text-gray-600 mt-2">
              Manage books, borrow/return records, and library staff.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Hostel</h3>
            <p className="text-gray-600 mt-2">
              Allocate hostel rooms, track occupancy, and maintenance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600">Transport</h3>
            <p className="text-gray-600 mt-2">
              Manage buses, routes, and student/staff transport services.
            </p>
          </div>
        </div>
      </main>
<Chatbot />
    </div>
  );
};

export default AdminDashboard;
