// src/pages/Form.jsx
import React, { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">📝 Form Handling</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
          <p className="mt-1 text-sm text-gray-400">Nilai saat ini: {email || 'kosong'}</p>
        </div>

        <div className="mb-6">
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
          <p className="mt-1 text-sm text-gray-400">Panjang: {password.length}</p>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;