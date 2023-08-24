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
    let winner = "";

    function clearBoard() {
        for(let i = 0; i < board.length; i++) {
            squaresArray[i].textContent = "";
            board[i] = "";
        }
        currentPlayer = "X";
    }

    function checkForWinner() {
        for (let i = 0; i < winningConditions.length; i++) {
            const [a, b, c] = winningConditions[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                console.log("win");
                return board[a]; // Returns the winning player ("X" or "O")
            }
        }
        return null; 
    }

    squares.forEach(square => square.addEventListener("click", (e) => {
        let index = e.target.getAttribute("data-index");

        if(e.target.innerText == "X" || e.target.innerText == "O") {
            return;
        } else if (currentPlayer == "X") {
            board[index] = "X"
            square.style.color = "#ffec19";
            square.innerText = "X"
            currentPlayer = "O";
        } else {
            board[index] = "O"
            square.style.color = "#ff9800";
            square.innerText = "O";
            currentPlayer = "X";
        }

        winner = checkForWinner();
    }))

    restartBtn.addEventListener("click", () => {
        clearBoard()
    });
})(); 




