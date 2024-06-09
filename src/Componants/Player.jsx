import { useState } from "react";

const Player = ({ initialname, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayername] = useState(initialname);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayername(event.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>;
  //   let buttonCaption = "Edit";

  if (isEditing) {
    editableplayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // buttonCaption = "Save";
  }
  return (
    <li className={isActive ? "Active" : undefined}>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
