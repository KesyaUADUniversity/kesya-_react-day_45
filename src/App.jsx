import React, { useState } from 'react';
import Child from './components/child';

const App = () => {
  const [message, setMessage] = useState('Halo dari Parent!');
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        <h1 className="text-3xl font-extrabold text-center">🚀 React Communication & Styling</h1>
        <p className="text-center mt-2 text-blue-100">Parent ↔ Child | useState | Tailwind v3.4</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 space-y-8">

        {/* Message Display */}
        <div className={`p-5 rounded-xl shadow-md ${isDark ? 'bg-gray-800' : 'bg-white'} transition-all`}>
          <h2 className="text-xl font-semibold mb-2">📬 Pesan dari Child:</h2>
          <p className={`text-lg p-3 rounded ${isDark ? 'bg-gray-700' : 'bg-blue-50'} border-l-4 border-blue-500`}>
            {message}
          </p>
        </div>

        {/* Toggle Theme Button */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
            isDark
              ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400'
              : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
        >
          {isDark ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
        </button>

        {/* Child Component */}
        <Child onNotify={setMessage} />

      </main>

      {/* Footer */}
      <footer className={`mt-10 p-4 text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        © 2026 mrs k - project
      </footer>
    </div>
  );
};

export default App;