import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Navigasi Utama */}
        <div className="flex gap-6 text-white">
          <Link to="/" className="hover:text-blue-400 font-medium">🏠 Home</Link>
          <Link to="/login" className="hover:text-blue-400 font-medium">🔑 Login</Link>
          <Link to="/profile" className="hover:text-blue-400 font-medium">👤 Profile</Link>
        </div>

        {/* Status Login */}
        <div className="text-sm text-gray-300">
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="text-red-400 hover:text-red-300 hover:underline"
            >
              Logout
            </button>
          ) : (
            <span>Guest</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;