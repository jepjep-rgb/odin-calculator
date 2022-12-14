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
const deleteButton = document.querySelector('.delete');
const clearButton = document.querySelector('.on-off');
const periodButton = document.querySelector('.period');
const answerButton = document.querySelector('.answer');

const inputDiv = document.querySelector('.bottom-screen');
const inputPara = document.createElement('p');
inputPara.classList.add('input');

const outputDiv = document.querySelector('.top-screen');
const outputPara = document.createElement('p');
outputPara.classList.add('output');


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

function checkPeriod(input){
    for (let i = 0; i < input.length; i++){
        let periodCount = 0;
        for (let j = 0; j < input[i].length; j++){
            if (String(input[i]).charAt(j) === '.'){
                periodCount++;
            }
            if (periodCount > 1) return true;
        }
    }
    return false;
}

function removeBlanks(input, operate){
    for (let i = 0; i < operate.length; i++) {
        if (operate[i] === ""){
            operate.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ""){
            input.splice(i, 1);
            i--;
        }
    }
}

function operateNumbers(input){
    let inputArray = input.split(/[\+\-\*\/]/);
    let operateArray = input.split(/\d+\.*\d*/);

    console.log(inputArray);
    console.log(operateArray);

    removeBlanks(inputArray,operateArray);
    if (checkPeriod(inputArray)){
        outputPara.textContent = "ERROR";
        outputDiv.append(outputPara);
        return;
    }

    if (!(inputArray.length === operateArray.length + 1)) {
        outputPara.textContent = "ERROR";
        outputDiv.append(outputPara);
        return;
    }


    for (let i = 0; i < operateArray.length; i++){
        if (operateArray[i] === '+'){
            inputArray[i+1] = addNumbers(Number(inputArray[i]), Number(inputArray[i+1]));
        } else if (operateArray[i] === '-'){
            inputArray[i+1]  = subtractNumbers(Number(inputArray[i]), Number(inputArray[i+1]));
        } else if (operateArray[i] === '*'){
            inputArray[i+1]  = multiplyNumbers(Number(inputArray[i]), Number(inputArray[i+1]));
        } else if (operateArray[i] === '/' && inputArray[i+1] !== '0'){
            inputArray[i+1]  = divideNumbers(Number(inputArray[i]), Number(inputArray[i+1]));
        } else if (operateArray[i] === '/' && inputArray[i+1] === '0'){
            inputArray[i+1] = NaN;
        }
        console.log(inputArray[i+1]);
    }

    outputPara.textContent = +parseFloat(inputArray[operateArray.length].toFixed(10));
    outputDiv.append(outputPara);
}

function inputDisplay(input){
    if (input === 'delete') {
        let text = inputPara.textContent;
        inputPara.textContent = text.slice(0, -1);
    } else if (input === 'clear'){
        inputPara.textContent = "";
        outputPara.textContent = "";
    } else if (input === 'answer'){
        inputPara.textContent += outputPara.textContent;
    } else {
        inputPara.textContent += input;
    }
    inputDiv.append(inputPara);
}

function pressKeyboard(e){
    if (e.key === "="){
        operateNumbers(inputPara.textContent)
    } if (e.keyCode >= 48 && e.keyCode <= 57){
        inputDisplay(e.key);
    } else if (e.keyCode >= 96 && e.keyCode <= 111){
        inputDisplay(e.key);
    } else if (e.keyCode >= 189 && e.keyCode <= 191){
        inputDisplay(e.key);
    } else if (e.keyCode === 8 || e.keyCode === 46){
        inputDisplay('delete')
    }
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

deleteButton.addEventListener('click', () => inputDisplay('delete'));
clearButton.addEventListener('click', () => inputDisplay('clear'));
periodButton.addEventListener('click', () => inputDisplay('.'));
equalSign.addEventListener('click', () => operateNumbers(inputPara.textContent));

answerButton.addEventListener('click', () => inputDisplay('answer'));

window.addEventListener('keydown', pressKeyboard);
