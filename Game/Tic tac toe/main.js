
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
let scoreX = 0;
let scoreO = 0;
let gameMode = '';

const winningCombinations = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
];

function setGameMode(mode) {
     gameMode = mode;
     document.getElementById("mode-buttons").style.display = "none";
     document.getElementById("board").style.display = "grid";
     document.getElementById("message").textContent = `Giliran Pemain ${currentPlayer}`;
     document.querySelector(".back-button").style.display = "inline-block";
}

function makeMove(cell, index) {
     if (board[index] === "" && gameActive) {
          board[index] = currentPlayer;
          cell.textContent = currentPlayer;
          cell.classList.add("placed", currentPlayer.toLowerCase());

          if (checkWin()) {
               document.getElementById("message").textContent = `Pemain ${currentPlayer} Menang! 🎉`;
               updateScore(currentPlayer);
               highlightWinnerCells();
               gameActive = false;
               return;
          }

          if (board.every(cell => cell !== "")) {
               document.getElementById("message").textContent = "Seri! 🤝";
               gameActive = false;
               return;
          }

          currentPlayer = currentPlayer === "X" ? "O" : "X";
          document.getElementById("message").textContent = `Giliran Pemain ${currentPlayer}`;

          if (gameMode === 'computer' && currentPlayer === 'O') {
               setTimeout(playWithComputer, 1000); // Delay 1 detik sebelum giliran komputer
          }
     }
}

function playWithComputer() {
     let emptyCells = board.map((value, index) => value === "" ? index : null).filter(index => index !== null);
     let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
     if (randomIndex !== undefined) {
          makeMove(document.querySelectorAll(".cell")[randomIndex], randomIndex);
     }
}

function checkWin() {
     return winningCombinations.some(combination => {
          const [a, b, c] = combination;
          return board[a] && board[a] === board[b] && board[a] === board[c];
     });
}

function highlightWinnerCells() {
     winningCombinations.forEach(combination => {
          const [a, b, c] = combination;
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
               document.querySelectorAll(".cell")[a].classList.add("winner");
               document.querySelectorAll(".cell")[b].classList.add("winner");
               document.querySelectorAll(".cell")[c].classList.add("winner");
          }
     });
}

function updateScore(winner) {
     if (winner === "X") {
          scoreX++;
          document.getElementById("scoreX").textContent = scoreX;
     } else {
          scoreO++;
          document.getElementById("scoreO").textContent = scoreO;
     }
}

function restartGame() {
     board = ["", "", "", "", "", "", "", "", ""];
     currentPlayer = "X";
     gameActive = true;
     document.getElementById("message").textContent = `Giliran Pemain ${currentPlayer}`;
     document.querySelectorAll(".cell").forEach(cell => {
          cell.textContent = "";
          cell.classList.remove("placed", "winner", "x", "o");
     });

     // Mulai ulang tanpa kembali ke pemilihan mode
     if (gameMode === 'computer' && currentPlayer === 'O') {
          setTimeout(playWithComputer, 1000);
     }
}

function goBackToMenu() {
     document.getElementById("board").style.display = "none";
     document.getElementById("mode-buttons").style.display = "block";
     document.getElementById("message").textContent = "Pilih Mode Permainan";
     document.querySelector(".back-button").style.display = "none";
     restartGame(); // Mengosongkan papan dan reset untuk siap ke mode baru
}