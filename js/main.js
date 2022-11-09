'use strict';

const chosenFighter = document.querySelector('.battle-fighter');
const startButton = document.querySelector('.battle-start');
const battleResult = document.querySelector('.battle-result');
const resetButton = document.querySelector('.battle-reset');

const humanFighter = document.querySelector('.human-fighter');
const computerFighter = document.querySelector('.computer-fighter');

let computerPoints = 0;
let humanPoints = 0;
let fightCount = 0;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function getComputerValue (){
    const computerRace = getRandomNumber(5);
    let computerValue = 0;
    if (computerRace === 1 || computerRace === 2 || computerRace === 3){
        computerValue = 2;
    } else if (computerRace === 4){
        computerValue = 3;
    } else {computerValue = 5;}

    return computerValue;
}

function humanComputerFight(fighterValue,computerValue){
    let result = "";

    if (fighterValue < computerValue) {
        const result1 = '¡Ha ganado el ejército del MAL! Vuelve a intentarlo';
        result = result1;
        computerPoints++;

    } else if (fighterValue > computerValue) {
        const result2 = '¡Ha ganado el ejército del BIEN! ¡Enhorabuena!';
        result = result2;
        humanPoints++;

    } else if (fighterValue === computerValue) {
        const result3 = '¡EMPATE!';
        result = result3;

    } else {
        result ='Debes seleccionar una raza con la que luchar';
    }

    return result;  
} 

function fightAndResults(){
    const fighterValue = parseInt(chosenFighter.value);
    const computerValue = getComputerValue();
    const fightResult = humanComputerFight(fighterValue,computerValue);
    return fightResult;   
}

function resultsInHtml(fightResult){
    battleResult.innerHTML = fightResult;
    humanFighter.innerHTML = `jugador: ${humanPoints}`;
    computerFighter.innerHTML = `Computadora: ${computerPoints}`;
    
}

function fightCounter(){
    fightCount++;
    console.log(fightCount);
    if (fightCount === 10){
        resetButton.classList.remove('hidden');
        startButton.classList.add('hidden');
        if (humanPoints > computerPoints) {
            battleResult.innerHTML = "Has ganado el juego";
        } else if (humanPoints < computerPoints) {
            battleResult.innerHTML = "El ordenador ganado el juego";
        } else {
            battleResult.innerHTML = "Ha habido un empate";
        }
    }
}

function resetBattle(){
    computerPoints = 0;
    humanPoints = 0;
    fightCount = 0;
    humanFighter.innerHTML = `jugador: ${humanPoints}`;
    computerFighter.innerHTML = `Computadora: ${computerPoints}`;
    battleResult.innerHTML = '¡comienza la batalla!';
    chosenFighter.value = "";
}

function handleClick (event){
    event.preventDefault();
    const result = fightAndResults();
    resultsInHtml(result);
    fightCounter();
}

function handleReset (event){
    event.preventDefault();
    resetButton.classList.add('hidden');
    startButton.classList.remove('hidden');
    resetBattle();
}

startButton.addEventListener('click', handleClick);
resetButton.addEventListener('click', handleReset);
