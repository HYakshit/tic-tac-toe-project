import { useState } from "react";
function Player({ name, symbol, isActive }) {
  const [newName, setNewName] = useState(name);
  const [editClicked, setEditClicked] = useState(false);

  // to inverse editing value
  function editButton() {
    setEditClicked((editing) => !editing);
  }
  // get entered name
  function handleChange(event) {
    setNewName(event.target.value);
  }
  // if edit not clicked
  let playerName = <span className="player-name">{newName}</span>;
  if (editClicked) {
    playerName = (
      <input onChange={handleChange} type="text" required value={newName} />
    );
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={editButton}>{editClicked ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
export default Player;
