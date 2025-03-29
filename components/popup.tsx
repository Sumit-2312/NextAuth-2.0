
"use client";

import { useState, useEffect } from "react";

export default function SuccessPopup() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (visible) {
      let interval = setInterval(() => {
        setProgress((prev) => Math.max(prev - 2, 0)); // Decrease progress
      }, 100); // Runs every 100ms (for a 5s countdown)

      let timeout = setTimeout(() => {
        setVisible(false); // Auto-hide after 5s
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [visible]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => {
          setVisible(true);
          setProgress(100);
        }}
        className="px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Show Success Popup
      </button>

      {visible && (
        <div className="fixed bottom-5 right-5 bg-green-600 text-white p-4 rounded-lg shadow-lg w-80">
          <div className="flex justify-between items-center">
            <p>✅ Successfully Logged In</p>
            <button onClick={() => setVisible(false)}>❌</button>
          </div>
          {/* Reverse Progress Bar */}
          <div className="mt-2 h-1 bg-white">
            <div
              className="h-full bg-gray-900"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
