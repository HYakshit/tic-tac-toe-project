import { useState } from "react";
const initialboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ selectedPlayer, turns }) {
  let gameBoard = initialboard;
  // const [gameBoard, setupdatedBoard] = useState(initialboard);

  // function handleSelect(rowIndex, colIndex) {
  //   setupdatedBoard((prevBoard) => {
  //     const updatedBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //     updatedBoard[rowIndex][colIndex]=playerSymbol;
  //     return updatedBoard;
  //   });
  //   selectedPlayer();
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => selectedPlayer(rowIndex, colIndex)}>
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
