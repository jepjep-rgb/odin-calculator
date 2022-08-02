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
const input = document.createElement('p').classList.add('input');
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

    numberOne.addEventListener('click', () => console.log('1'));
    numberTwo.addEventListener('click', () => console.log('2'));
    numberThree.addEventListener('click', () => console.log('3'));
    numberFour.addEventListener('click', () => console.log('4'));
    numberFive.addEventListener('click', () => console.log('5'));
    numberSix.addEventListener('click', () => console.log('6'));
    numberSeven.addEventListener('click', () => console.log('7'));
    numberEight.addEventListener('click', () => console.log('8'));
    numberNine.addEventListener('click', () => console.log('9'));
    numberZero.addEventListener('click', () => console.log('0'));

    operatorAdd.addEventListener('click', () => console.log('+'));
    operatorSubtract.addEventListener('click', () => console.log('-'));
    operatorMultiply.addEventListener('click', () => console.log('*'));
    operatorDivide.addEventListener('click', () => console.log('/'));
    equalSign.addEventListener('click', () => console.log('='));
