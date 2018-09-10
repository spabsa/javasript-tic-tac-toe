const winCombos = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [6, 4, 2]
];

let playerTurn = 'x';
let gameEnded = false;
const cells = document.querySelectorAll('td');
const msg = document.querySelector('.msg-box');

for(i = 0; i < 9; i++) {
     cells[i].addEventListener('click', runGame);
}

function runGame() {
     if(gameEnded===true||this.innerHTML!=='') {
          return;
     }
     this.innerHTML = playerTurn;
     checkForWin();
     switchTurn();
}

function checkForWin() {
     for(let i = 0; i < winCombos.length; i++) {
          const c0 = document.getElementById('c' + winCombos[i][0]);
          const c1 = document.getElementById('c' + winCombos[i][1]);
          const c2 = document.getElementById('c' + winCombos[i][2]);

          if(c0.innerHTML===playerTurn&&c1.innerHTML===playerTurn&&c2.innerHTML===playerTurn) {
               gameEnded = true;
               setTimeout(function() { msg.classList.add('text2'); }, 100);
               clearBoard();
          }
     }
     function clearBoard() {
     	for(let i = 0; i < cells.length; i++) {
     		setTimeout(function() {cells[i].innerHTML = '';}, 1000);
     	}
     }
}

function switchTurn() {
     if(playerTurn === 'x') {
          playerTurn = 'o'
     } else {
          playerTurn = 'x';
     }
}