import React from 'react';

const AdminPanel = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-purple-400">👑 Admin Panel</h1>
        <button
          onClick={onLogout}
          className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
        >
          Logout
        </button>
      </div>

      <p>Hanya user dengan role <strong>admin</strong> yang bisa mengakses halaman ini.</p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-purple-900 p-4 rounded">User Management</div>
        <div className="bg-purple-900 p-4 rounded">Product Settings</div>
        <div className="bg-purple-900 p-4 rounded">Analytics</div>
      </div>
    </div>
  );
};

export default AdminPanel;