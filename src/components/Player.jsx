import { useState } from "react";
function Player({ name, symbol }) {
  const [newName, setNewName] = useState(name);
  const [editClicked, setEditClicked] = useState(false);

  function editButton() {
    setEditClicked((editing) => !editing);
  }
  function handleChange(event) {
    setNewName(event.target.value);
  }
  let playerName = <span className="player-name">{newName}</span>;
  if (editClicked) {
    playerName = (
      <input onChange={handleChange} type="text" required value={newName} />
    );
  }
  return (
    <>
      <li>
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={editButton}>{editClicked ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
export default Player;
