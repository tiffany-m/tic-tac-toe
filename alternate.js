// Alternate scripts using factory functions and modules.  Only thing not working is the "current player" feature.

// Player Factory
const Player = (sign, color) => {
    return { sign, color };
};

// Game Board Module
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const squares = document.querySelectorAll(".box");
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const getBoard = () => board;
    const getSquares = () => squares;

    const setSquare = (index, sign) => {
        board[index] = sign;
        squares[index].innerText = sign;
    };

    const clear = () => {
        for (let i = 0; i < board.length; i++) {
            squares[i].textContent = "";
            board[i] = "";
        }
    };

    return { getBoard, setSquare, clear, getSquares, winningConditions };
})();

// Game Logic Module
const gameLogic = (() => {
    const player1 = Player("X", "#ffec19");
    const player2 = Player("O", "#ff9800");
    let currentPlayer = player1;

    const restartBtn = document.getElementById("restart-btn");
    const currentPlayerSymbol = document.querySelector(".current-player-symbol");
    const currentWinner = document.querySelector(".current-winner");

    const clearBoard = () => {
        gameBoard.clear();
        currentPlayer = player1;
        currentWinner.innerText = "";
    };

    const checkForWinner = () => {
        const board = gameBoard.getBoard();
        const winningConditions = gameBoard.winningConditions;
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const handleSquareClick = (e) => {
        const index = e.target.getAttribute("data-index");
        const board = gameBoard.getBoard();

        if (board[index] === "X" || board[index] === "O") return;

        gameBoard.setSquare(index, currentPlayer.sign);
        e.target.style.color = currentPlayer.color;

        const winner = checkForWinner();
        if (winner) {
            currentWinner.innerText = winner;
        } else {
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    };

    gameBoard.getSquares().forEach((square) => {
        square.addEventListener("click", handleSquareClick);
    });

    restartBtn.addEventListener("click", () => {
        clearBoard();
    });
})();