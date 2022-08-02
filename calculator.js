const numberOne = document.querySelector('.one');
const numberTwo = document.querySelector('.two');
const numberThree = document.querySelector('.three');
const numberFour = document.querySelector('.four');
const numberFive = document.querySelector('.five');
const numberSix = document.querySelector('.six');
const numberSeven = document.querySelector('.seven');
const numberEight = document.querySelector('.eight');
const numberNine = document.querySelector('.nine');
const numberZero = document.querySelector('.zero');

const operatorAdd = document.querySelector('.add');
const operatorSubtract = document.querySelector('.subtract');
const operatorMultiply = document.querySelector('.multiply');
const operatorDivide = document.querySelector('.divide');

const equalSign = document.querySelector('.equals');

const inputDiv = document.querySelector('.bottom-screen');
const inputPara = document.createElement('p');
inputPara.classList.add('input');


function addNumbers(num1, num2){
    return num1 + num2;
}

function subtractNumbers(num1, num2){
    return num1 - num2;
}

function multiplyNumbers(num1, num2){
    return num1 * num2;
}

function divideNumbers(num1, num2){
    return num1 / num2;
}

function operateNumbers(input){
    let inputArray = input.split(/[\+\-\*\/]/);
    let operateArray = input.split(/\d/);
    for (let i = 0; i < operateArray.length; i++) {
        if (operateArray[i] === ""){
            operateArray.splice(i, 1);
            i--;
        }
    }
    console.log(inputArray);
    console.log(operateArray);
    if (operateArray[0] === '+') console.log(addNumbers(Number(inputArray[0]), Number(inputArray[1])));
    else if (operateArray[0] === '-') console.log(subtractNumbers(Number(inputArray[0]), Number(inputArray[1])));
    else if (operateArray[0] === '*') console.log(multiplyNumbers(Number(inputArray[0]), Number(inputArray[1])));
    else if (operateArray[0] === '/') console.log(divideNumbers(Number(inputArray[0]), Number(inputArray[1])));
}

function inputDisplay(input){
    inputPara.textContent += input;
    inputDiv.append(inputPara);
}

    numberOne.addEventListener('click', () => inputDisplay('1'));
    numberTwo.addEventListener('click', () => inputDisplay('2'));
    numberThree.addEventListener('click', () => inputDisplay('3'));
    numberFour.addEventListener('click', () => inputDisplay('4'));
    numberFive.addEventListener('click', () => inputDisplay('5'));
    numberSix.addEventListener('click', () => inputDisplay('6'));
    numberSeven.addEventListener('click', () => inputDisplay('7'));
    numberEight.addEventListener('click', () => inputDisplay('8'));
    numberNine.addEventListener('click', () => inputDisplay('9'));
    numberZero.addEventListener('click', () => inputDisplay('0'));

    operatorAdd.addEventListener('click', () => inputDisplay('+'));
    operatorSubtract.addEventListener('click', () => inputDisplay('-'));
    operatorMultiply.addEventListener('click', () => inputDisplay('*'));
    operatorDivide.addEventListener('click', () => inputDisplay('/'));
    equalSign.addEventListener('click', () => console.log('='));
