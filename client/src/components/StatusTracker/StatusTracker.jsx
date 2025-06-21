import React from "react";

function StatusTracker({ updates }) {
  if (!updates.length) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Status Updates</h3>
      <ul className="space-y-2">
        {updates.map((line, idx) => (
          <li key={idx} className="bg-gray-100 p-3 rounded-md text-sm text-gray-800">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatusTracker;

