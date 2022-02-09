import { useState } from 'react';
import { findWinner } from '../Winner/index.js';
import Board from '../Board';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const winner = findWinner(board);
    const currentPlayer = isXTurn ? "X" : "O";

    const handleSquareClick = (index) => {
        if (winner || board(index)){
            return;
        }

        setBoard([
            ...board.slice(0, index),
            currentPlayer,
            ...board.slice(index + 1)
        ]);
        setIsXTurn(!isXTurn);
    };

    return (
        <>
            <Board squares={board} onSelectSquare={handleSquareClick} />
            <div className="info">
                <h3>{winner ? "Winner:" + winner : "Next Player: " + currentPlayer}</h3>
            </div>
        </>
    )
}

export default Game;