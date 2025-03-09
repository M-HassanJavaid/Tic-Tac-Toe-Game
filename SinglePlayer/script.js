let TossWinner;
const TossWin = document.getElementById('TossWon');

function Toss() {
    let candiates = ['X', 'O']
    TossWinner = candiates[Math.floor(Math.random() * 2)];
    TossWin.innerText = `Let ${(TossWinner).replace('O' , 'Computer Bot').replace('X' , 'You')} Start first!`
    document.getElementById('TossBtn').style.display = 'none';
    AllBoxes.forEach((element)=>{
        element.style.pointerEvents = 'all';
    })
    if (TossWinner === 'O') {
        BotTurn()
    }
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

function BotTurn() {
    let boxCollection = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
    let RandomBotMark;
    for (let i = 0; i < boxCollection.length; i++) {
        RandomBotMark = boxCollection[Math.floor(Math.random() * 9)];
        if (RandomBotMark.innerText != 'X' && RandomBotMark.innerText != 'O') {
            RandomBotMark.style.color = 'transparent';
            RandomBotMark.innerText = 'O'
            setTimeout(() => {
                RandomBotMark.style.color = 'white';
            }, 500);
            TossWinner = 'X'
            RandomBotMark.style.pointerEvents = 'none';
            TurnCount++;
            break;
        }
    }
}

function play(element) {
    let WinORcontinue;
    TossWin.innerText = '';
    if (TossWinner === 'X') {
        element.innerText = 'X';
        element.style.pointerEvents = 'none';
        TurnCount++;
        TossWinner = 'O'
        WinORcontinue = CheckWin();
        if (WinORcontinue === 'win') {
            return;
        }
        BotTurn()
        WinORcontinue = CheckWin()
        if (WinORcontinue === 'win') {
            return;
        }
    } else {
        BotTurn()
        WinORcontinue = CheckWin()
        if (WinORcontinue === 'win') {
            return;
        }
    }
}


function CheckWin() {

    if (
        ((box1.innerText === box2.innerText) && (box2.innerText === box3.innerText) && (box3.innerText === 'X' || box3.innerText === 'O')) ||
        ((box4.innerText === box5.innerText) && (box5.innerText === box6.innerText) && (box6.innerText === 'X' || box6.innerText === 'O')) ||
        ((box7.innerText === box8.innerText) && (box8.innerText === box9.innerText) && (box9.innerText === 'X' || box9.innerText === 'O')) ||
        ((box1.innerText === box4.innerText) && (box4.innerText === box7.innerText) && (box7.innerText === 'X' || box7.innerText === 'O')) ||
        ((box2.innerText === box5.innerText) && (box5.innerText === box8.innerText) && (box8.innerText === 'X' || box8.innerText === 'O')) ||
        ((box3.innerText === box6.innerText) && (box6.innerText === box9.innerText) && (box9.innerText === 'X' || box9.innerText === 'O')) ||
        ((box1.innerText === box5.innerText) && (box5.innerText === box9.innerText) && (box9.innerText === 'X' || box9.innerText === 'O')) ||
        ((box7.innerText === box5.innerText) && (box5.innerText === box3.innerText) && (box3.innerText === 'X' || box3.innerText === 'O'))) {
        if (TossWinner === 'X') {
            console.log('X helo')
            TossWin.innerText = 'Sorry, But you loss the game!';
            RetryBtn.style.display = 'block';
            AllBoxes.forEach((element) => {
                element.style.pointerEvents = 'none'
            });
            return 'win'
        } else if (TossWinner === 'O') {
            console.log('O helo')
            TossWin.innerText = 'Congratulation, You win the game!';
            RetryBtn.style.display = 'block';
            AllBoxes.forEach((element) => {
                element.style.pointerEvents = 'none'
            });
            return 'win'
        }
    } else if (TurnCount === 9) {
        TossWin.innerText = 'Oops, The game is tied!';
        RetryBtn.style.display = 'block';
    }
}





