const players = (sign) = {

}

let gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const restartBtn = document.getElementById('restart-btn');
    let squares = document.querySelectorAll(".box");
    let squaresArray = Array.from(squares);

    function clearBoard() {
        for(let i = 0; i < board.length; i++) {
            squaresArray[i].textContent = "";
        }
    }

    squares.forEach(square => square.addEventListener("click", (e) => {
        if(e.target.innerText == "") {
            square.innerText = "O";
        } 
    }))

    restartBtn.addEventListener("click", () => {
        clearBoard()
    });
})(); 




