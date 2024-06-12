import { useState } from "react";

export function Menu() {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

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