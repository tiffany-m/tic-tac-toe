const players = {
    // code
}

let gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const restartBtn = document.getElementById('restart-btn');
    const squares = document.querySelectorAll(".box");
    const squaresArray = Array.from(squares);
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
    let currentPlayer = "X";
    let currentPlayerSymbol = document.querySelector(".current-player-symbol");
    const xScoreDisplay = document.querySelector(".x-score-display");
    const oScoreDisplay = document.querySelector(".o-score-display");
    const winnerDisplay = document.getElementById("winner-display");
    let currentWinner = document.querySelector(".current-winner")
    let xScore = 0;
    let oScore = 0;
    let winner = "";

    function clearBoard() {
        for(let i = 0; i < board.length; i++) {
            squaresArray[i].textContent = "";
            board[i] = "";
        }
        currentPlayer = "X";
        currentWinner.innerText = "";
    }

    function checkForWinner() {
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                if(board[a] === "X") {
                    xScore++;
                    xScoreDisplay.innerText = xScore;
                    console.log("winnder x")
                } else {
                    oScore++;
                    oScoreDisplay.innerText = oScore;
                    console.log("winner 0")
                }
                return board[a];
            }
        }
        return null; 
    }

    function handleSquareClick(e) {
        let index = e.target.getAttribute("data-index");

        if (e.target.innerText == "X" || e.target.innerText == "O") {
            return;
        } else if (currentPlayer == "X") {
            board[index] = "X"
            e.target.style.color = "#ffec19";
            e.target.innerText = "X"
            currentPlayer = "O";
            currentPlayerSymbol.innerText = `${currentPlayer}`;
            currentPlayerSymbol.style.color = "#ff9800";
        } else {
            board[index] = "O"
            e.target.style.color = "#ff9800";
            e.target.innerText = "O";
            currentPlayer = "X";
            currentPlayerSymbol.innerText = `${currentPlayer}`;
            currentPlayerSymbol.style.color = "#ffec19";
        }

        winner = checkForWinner();
        if (winner) {
            squares.forEach(square => square.removeEventListener("click", handleSquareClick));
            currentWinner.innerText = winner;
            if(winner === "X") {
                currentWinner.style.color = "#ffec19";
            } else {
                currentWinner.style.color = "ff9800";
            }
        }
    }

    squares.forEach(square => square.addEventListener("click", handleSquareClick));

    restartBtn.addEventListener("click", () => {
        clearBoard();
        squares.forEach(square => square.addEventListener("click", handleSquareClick));
    });
})(); 




