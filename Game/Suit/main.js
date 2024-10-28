let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
     const choices = ["batu", "gunting", "kertas"];
     const emojis = {
          "batu": "Batu ✊",
          "gunting": " Gunting ✌️",
          "kertas": "Kertas ✋"
     };
     const resultsEmoji = {
          menang: "🎉 Kamu menang! 🎉",
          kalah: "😂 Kamu kalah! 😂",
          seri: "🤝 Seri! 🤝"
     };

     // Pilihan komputer
     const computerChoice = choices[Math.floor(Math.random() * choices.length)];

     // Menampilkan pilihan
     document.getElementById("playerChoice").textContent = emojis[playerChoice];
     document.getElementById("computerChoice").textContent = emojis[computerChoice];

     // Menentukan hasil
     let resultMessage = "";
     if (playerChoice === computerChoice) {
          resultMessage = resultsEmoji.seri;
     } else if (
          (playerChoice === "batu" && computerChoice === "gunting") ||
          (playerChoice === "gunting" && computerChoice === "kertas") ||
          (playerChoice === "kertas" && computerChoice === "batu")
     ) {
          resultMessage = resultsEmoji.menang;
          playerScore++;
     } else {
          resultMessage = resultsEmoji.kalah;
          computerScore++;
     }
     // Tampilkan hasil dan update skor
     document.getElementById("result").innerHTML = resultMessage;
     document.getElementById("playerScore").textContent = playerScore;
     document.getElementById("computerScore").textContent = computerScore;
}