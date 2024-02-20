import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = (e) => {
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" />
        ) : (
          <span className="player-name">{name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>Edit</button>
    </li>
  );
}
