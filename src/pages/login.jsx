import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // ← CEGAH reload halaman

    // Simulasi login — cukup isi email & password, langsung login
    if (email && password) {
      onLogin(); // ← Ini yang mengubah isLoggedIn jadi true di App.jsx
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🔑 Login</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;