let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    let choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function convertToWord(letter){
if(letter === 'r') return 'Piedra';
if(letter === 'p') return 'Papel';
return 'Tijera';
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} (Jugador) le gana a ${convertToWord(computerChoice)} (Computadora). ¡Ganaste! 🎉`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() =>userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML= userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} (Jugador) pierde contra  ${convertToWord(computerChoice)} (Computadora). ¡Perdiste! 👎`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} (Jugador) es igual a  ${convertToWord(computerChoice)} (Computadora). ¡Es un empate! 🤜🤛`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
        break;  
        
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        break; 

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
        break;
    }
}


function main (){
    rock_div.addEventListener('click',() => game("r"));

    paper_div.addEventListener('click',() => game("p"));

    scissor_div.addEventListener('click',() =>game("s"));
}

main();








