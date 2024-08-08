let home = document.getElementById('home');
let guest = document.getElementById('guest');

let scoreH = 0;
let scoreG = 0;

function add1H(){
    scoreH += 1;
    home.textContent = scoreH;
}

function add2H(){
    scoreH += 2;
    home.textContent = scoreH;
}

function add3H(){
    scoreH += 3;
    home.textContent = scoreH;
}

function add1G(){
    scoreG += 1;
    guest.textContent = scoreG;
}

function add2G(){
    scoreG += 2;
    guest.textContent = scoreG;
}

function add3G(){
    scoreG += 3;
    guest.textContent = scoreG;
}