import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the session
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">College Admin Portal</h1>
          <p className="text-gray-600">Welcome back, Anukriti</p>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          Logout
        </button>
      </div>

      {/* Stats Cards (What Colleges Pay For) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-bold uppercase">Total Events</h3>
          <p className="text-3xl font-bold text-gray-800">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-bold uppercase">Student Registrations</h3>
          <p className="text-3xl font-bold text-gray-800">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h3 className="text-gray-500 text-sm font-bold uppercase">Revenue</h3>
          <p className="text-3xl font-bold text-gray-800">₹0</p>
        </div>
      </div>

      {/* Quick Action */}
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <h2 className="text-xl font-bold mb-4">Manage Your Fest</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          + Create New Event
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;