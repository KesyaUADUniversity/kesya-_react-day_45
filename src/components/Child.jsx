import React, { useState } from 'react';

const Child = ({ onNotify, isDark }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onNotify(input);
      setInput('');
    }
  };

  return (
    <div className={`p-6 rounded-xl shadow-lg transition-all ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        👶 Child Component
        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">v1.0</span>
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ketik pesan untuk Parent..."
          className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
            isDark
              ? 'bg-gray-700 border-gray-600 text-white'
              : 'bg-gray-50 border-gray-300 text-gray-900'
          }`}
        />

        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className={`w-full py-3 rounded-lg font-medium transition ${
            input.trim()
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          📤 Kirim ke Parent
        </button>
      </div>
    </div>
  );
};

export default Child;