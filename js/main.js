'use strict';

const chosenFighter = document.querySelector('.battle-fighter');
const startButton = document.querySelector('.battle-start');
const battleResult = document.querySelector('.battle-result');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  function getValues (){
    const fighterValue = parseInt(chosenFighter.value);
    console.log(fighterValue);
    const computerValue = getRandomNumber(6);
    console.log(computerValue);
    if (fighterValue < computerValue) {
        const result1 = '¡Ha ganado el ejército del MAL! Vuelve a intentarlo';
        battleResult.innerHTML = result1;
       
    } else if (fighterValue > computerValue) {
        const result2 = '¡Ha ganado el ejército del BIEN! ¡Enhorabuena!';
        battleResult.innerHTML = result2;
        
    } else if (fighterValue === computerValue) {
        const result3 = '¡EMPATE!';
        battleResult.innerHTML = result3;
    }
}


function handleClick (){
    getValues();
  
}

/* battleResult.innerHTML = 'holi'; */



startButton.addEventListener('click', handleClick);