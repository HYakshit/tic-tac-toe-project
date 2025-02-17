import Player from "./components/player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { useState } from "react";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function setActivePlayerFunction(rowIndex, colIndex) {
    //to set active player

    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
    console.log(activePlayer);
    // create game turns log
    setGameTurns((prviousTurns) => {
      // to update or create game log

      let currentPlayer = "X"; // to change symbol as per previous player
      if (prviousTurns.length > 0 && prviousTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prviousTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        <GameBoard
          selectedPlayer={setActivePlayerFunction} //passing function setActivePlayerFunction to component
          turns={gameTurns} //pass array of [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prviousTurns,]
        ></GameBoard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  );
}

export default App;
