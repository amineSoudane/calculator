let currentValue = '';
let previousValue = '';
let operatorSign = '';

document.addEventListener("DOMContentLoaded",function () {
    //storing html components
    let number = Array.from(document.querySelectorAll(".number"));
    let operator = Array.from(document.querySelectorAll(".operator"));
    let decimal = document.querySelector(".decimal");
    let equal = document.querySelector(".equal");
    let clear = document.querySelector(".clear");
    let screen = document.querySelectorAll(".screen");
    let previous = document.querySelector(".previous-screen");
    let current = document.querySelector(".current-screen");

    
    number.forEach((number)=>{number.addEventListener("click",function(e){
        handleNumber(e.target.textContent)
        current.textContent = currentValue;
    })})

    operator.forEach(op => op.addEventListener("click",function (op) {
        handleOperator(op.target.textContent);
        previous.textContent = `${previousValue}  ${operatorSign}`;
        current.textContent = currentValue;
    }))

    clear.addEventListener("click",function () {
        currentValue = '';
        previousValue = '';
        operatorSign = '';
        previous.textContent = '';
        current.textContent = '';
    })

    equal.addEventListener("click",function(){
        calculate();
        previous.textContent = '';
        current.textContent = previousValue;
        
    })

    decimal.addEventListener("click",function () {
        if (!currentValue.includes('.')) {
            currentValue = `${currentValue}.`
        }
        
    })

    
});

function handleNumber(number){
    if (currentValue.length<=10) {
        currentValue += number; 
    }
}

function handleOperator(op) {
    operatorSign = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if (operatorSign === '/') {
        previousValue /= currentValue;
    } else if (operatorSign === '*'){
        previousValue *= currentValue;
    } else if (operatorSign === '-'){
        previousValue -= currentValue;
    } else if (operatorSign === '+'){
        previousValue += currentValue;
    } 
    
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

