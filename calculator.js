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