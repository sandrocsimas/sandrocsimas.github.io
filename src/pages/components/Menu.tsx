"use client";

import { useEffect, useState } from "react";

export default function Menu() {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <div>
      <button onClick={handleMenuClick}>
        {isActive ? "Hide" : "Show"} Menu
      </button>
      {isActive && (
        <div>
          <div>Curriculum</div>
          <div>Projects</div>
        </div>
      )}
    </div>
  );
}
