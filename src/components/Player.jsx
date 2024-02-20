import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name} />
        ) : (
          <span className="player-name">{name}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
