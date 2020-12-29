function createChess() {
    numcolumn();
    letterRow(letters);
    for(let i = 1; i <= 8; i++){
        if (i % 2 === 0) {
            chessRowEven();
        }
        else {
            chessRowOdd()
        }
    }
}

function chessRowEven() {
    let chessRow = document.createElement('div');
    chessboard.appendChild(chessRow);
    chessRow.classList.add('chessrow')
    for(let i = 1; i <= 8; i++){
        if (i % 2 === 0) {
            let chessplate = document.createElement('div');
            chessRow.appendChild(chessplate);
            chessplate.classList.add('chessplate-white');
        }
        else {
            let chessplate = document.createElement('div');
            chessRow.appendChild(chessplate);
            chessplate.classList.add('chessplate-black');
        }
    }
}

function chessRowOdd(){
    let chessRow = document.createElement('div');
    chessRow.classList.add('chessrow')
    chessboard.appendChild(chessRow);
    for(let i = 1; i <= 8; i++){
        if (i % 2 === 0) {
            let chessplate = document.createElement('div');
            chessRow.appendChild(chessplate);
            chessplate.classList.add('chessplate-black');
        }
        else {
            let chessplate = document.createElement('div');
            chessRow.appendChild(chessplate);
            chessplate.classList.add('chessplate-white');
        }
    }
}





let chessboard = document.querySelector('.chessboard');
chessboard.addEventListener('click', createChess)
let chess = document.querySelector('.chess');


function numcolumn(){
    for (let i = 1; i <= 8; i++){
        let num = document.createElement('div');
        num.classList.add('num')
        chess.appendChild(num);
        num.textContent = i;
    }
}

let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

function letterRow(arr) {
    let letter_row = document.createElement('div');
    letter_row.classList.add('letter_row');
    chess.appendChild(letter_row);
    for(let i = 0; i < 8; i++){
        let letter = document.createElement('div');
        letter.classList.add('letter');
        letter_row.appendChild(letter);
        letter.textContent = arr[i];
    }
}

