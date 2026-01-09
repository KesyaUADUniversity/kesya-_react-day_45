import React from 'react';
import { Link } from 'react-router-dom'; 

const Dashboard = ({ role, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📊 Dashboard</h1>
        <button
          onClick={onLogout}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
        >
          Logout
        </button>
      </div>

      <p>Selamat datang! Anda login sebagai: <strong>{role}</strong></p>

      <div className="mt-6 space-y-3">
        {/* Ganti a → Link */}
        <Link to="/form" className="block px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded">
          Lihat Form Handling
        </Link>
        
        {role === 'admin' && (
          <Link to="/admin" className="block px-4 py-2 bg-purple-800 hover:bg-purple-700 rounded">
            Akses Panel Admin
          </Link>
        )}
      </div>
    </div>
  );
};

export default Dashboard;