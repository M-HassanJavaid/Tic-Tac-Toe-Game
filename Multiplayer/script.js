let TossWinner;
const TossWin = document.getElementById('TossWon');

function Toss() {
    let candiates = ['X' , 'O']
    TossWinner = candiates[Math.floor(Math.random() * 2)];
    TossWin.innerText = `Player ${TossWinner} Start first!`
    document.getElementById('TossBtn').style.display = 'none';
    AllBoxes.forEach((element)=>{
        element.style.pointerEvents = 'all';
    })
}

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');
let AllBoxes = document.querySelectorAll('.box');
let RetryBtn = document.getElementById('RetryBtn');

let TurnCount = 0;
function play(element) {
    if(TossWinner === 'X'){
        element.style.pointerEvents = 'none';
        element.innerText = 'X';
        TossWinner = 'O';
        TossWin.innerText = 'Now, Its player O turn';
        TurnCount++;
    } else if(TossWinner === 'O') {
        element.style.pointerEvents = 'none';
        element.innerText = 'O';
        TossWinner = 'X';
        TossWin.innerText = 'Now, Its player X turn';
        TurnCount++;
    } 
    
    if (
        ( (box1.innerText === box2.innerText) && (box2.innerText === box3.innerText) && (box3.innerText === 'X' || box3.innerText === 'O')) ||
        ( (box4.innerText === box5.innerText) && (box5.innerText === box6.innerText) && (box6.innerText === 'X' || box6.innerText === 'O')) ||
        ( (box7.innerText === box8.innerText) && (box8.innerText === box9.innerText) && (box9.innerText === 'X' || box9.innerText === 'O')) ||
        ( (box1.innerText === box4.innerText) && (box4.innerText === box7.innerText) && (box7.innerText === 'X' || box7.innerText === 'O')) ||
        ( (box2.innerText === box5.innerText) && (box5.innerText === box8.innerText) && (box8.innerText === 'X' || box8.innerText === 'O')) ||
        ( (box3.innerText === box6.innerText) && (box6.innerText === box9.innerText) && (box9.innerText === 'X' || box9.innerText === 'O')) ||
        ( (box1.innerText === box5.innerText) && (box5.innerText === box9.innerText) && (box9.innerText === 'X' || box9.innerText === 'O')) ||
        ( (box7.innerText === box5.innerText) && (box5.innerText === box3.innerText) && (box3.innerText === 'X' || box3.innerText === 'O')) ) {

           if (TossWinner === 'X') {
            TossWin.innerText = 'Congratulation, Player O win the game!';
            RetryBtn.style.display = 'block';
            AllBoxes.forEach((element)=>{
                element.style.pointerEvents = 'none'
            })
           } else if (TossWinner === 'O') {
            TossWin.innerText = 'Congratulation, Player X win the game!';
            RetryBtn.style.display = 'block';
            AllBoxes.forEach((element)=>{
                element.style.pointerEvents = 'none'
            })
           }
    } else if (TurnCount === 9) {
        TossWin.innerText = 'Oops, The game is tyed!';
        RetryBtn.style.display = 'block';
    }
}






    
    