// import { useState } from "react";

export default function GameBoard({ selectedPlayer, gameBoard }) {
 
  
  // const [gameBoard, setupdatedBoard] = useState(initialboard);

  // function handleSelect(rowIndex, colIndex) {
  //   setupdatedBoard((prevBoard) => {
  //     const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex]=playerSymbol;
  //     return updatedBoard;
  //   });
  //   selectedPlayer();
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => selectedPlayer(rowIndex, colIndex)} disabled={symbol !== null}>
                  {symbol}
                  {/* {console.log(rowIndex+""+colIndex)} */}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
