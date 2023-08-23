const players = (sign) = {

}

let gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const restartBtn = document.getElementById('restart-btn');
    let squares = document.querySelectorAll(".box");
    let squaresArray = Array.from(squares);
    let currentPlayer = "X";

    function clearBoard() {
        for(let i = 0; i < board.length; i++) {
            squaresArray[i].textContent = "";
        }
    }

    squares.forEach(square => square.addEventListener("click", (e) => {
        if(e.target.innerText == "X" || e.target.innerText == "O") {
            return;
        } else if (currentPlayer == "X") {
            square.innerText = "X"
            currentPlayer = "O";
        } else {
            square.innerText = "O";
            currentPlayer = "X";
        }
    }))

    restartBtn.addEventListener("click", () => {
        clearBoard()
    });
})(); 




