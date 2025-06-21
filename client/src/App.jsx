import { useState } from 'react';
import axios from 'axios';
import StatusTracker from './components/StatusTracker/StatusTracker';

function App() {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState([]);

  const handleSubmit = async () => {
    setStatus(['Processing your request...']);
    const res = await axios.post('http://localhost:5000/api/execute', { input });
    setStatus(res.data.statusUpdates);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          🧠 Task Executor AI
        </h1>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your task..."
          className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 min-h-[100px]"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Task
        </button>
        <StatusTracker updates={status} />
      </div>
    </div>
  );
}

export default App;
