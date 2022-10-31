'use strict';

const chosenFighter = document.querySelector('.battle-fighter');
const startButton = document.querySelector('.battle-start');
const battleResult = document.querySelector('.battle-result');
let result = "";
const humanFighter = document.querySelector('.human-fighter');
const computerFighter = document.querySelector('.computer-fighter');
let resultValue = "";


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }


function getPoints(){
let sumResult= "";
    function sum (){
        sumResult = parseInt(resultValue) + 1;
        return sumResult;
    }
    let suma = sumResult;

    if (resultValue === 1){
        computerFighter.innerHTML += suma;
            console.log('funciona 1')

    } else if (resultValue === 2){
        console.log('funciona 2')
        humanFighter.innerHTML += suma;
    } else if (resultValue === 3){
        console.log('funciona 3')
    } 
}

function getValues (){
    const fighterValue = parseInt(chosenFighter.value);
    console.log(fighterValue);
    const computerValue = getRandomNumber(6);
    console.log(computerValue);
    if (fighterValue < computerValue) {
        const result1 = '¡Ha ganado el ejército del MAL! Vuelve a intentarlo';
        result = result1;
        resultValue = 1;
       
    } else if (fighterValue > computerValue) {
        const result2 = '¡Ha ganado el ejército del BIEN! ¡Enhorabuena!';
        result = result2;
        resultValue = 2;
        
    } else if (fighterValue === computerValue) {
        const result3 = '¡EMPATE!';
        result = result3;
        resultValue = 3;
        
    }
    battleResult.innerHTML = result;
    console.log(result);
    
     getPoints(result);
    
}




function handleClick (){
    getValues();
}

startButton.addEventListener('click', handleClick);