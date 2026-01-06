import React, { useEffect, useState } from "react";

// ✅ Throttle Utility
function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

export default function Throttling() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = throttle((e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      console.log("Mouse moved to:", e.clientX, e.clientY);
    }, 2000); // Run every 500ms at most

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-2">Throttled Mouse Tracker</h1>
      <p>Move your mouse around. Updates every 2000ms '2 Seconds':</p>
      <div className="mt-4 p-4 bg-gray-100 border rounded w-fit">
        X: {position.x}, Y: {position.y}
      </div>
    </div>
  );
}
