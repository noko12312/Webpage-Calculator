

const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equal]");
const clearButton = document.querySelector("[data-clear]");
const numberButtons = document.querySelectorAll("[data-number]");

var firstNum = "";
var secondNum = "";
var operation = "";
var to_display = "";

function clear() {
    firstNum = "";
    secondNum = "";
    operation = "";
}

function screenAppend(number) {
    if(operation === ""){
        if(number === "." && firstNum.includes(".")){return;}
        firstNum += number.toString();
    }
    else {
        if(number === "." && secondNum.includes(".")) {return;}
        secondNum += number.toString();
    }
}

function chooseOperation(operation_choice) {
    if (firstNum === "" || operation !== ""){return;}
    operation = operation_choice;

}

function compute(expression) {
    var solution = eval(expression);
    document.getElementById("display").value = solution;
    firstNum = solution;
    secondNum = "";
    operation = "";
}

function displayUpdate(num, op, num2) {
    to_display = num + op + num2;
    document.getElementById("display").value = to_display;
}


numberButtons.forEach((button) =>
    button.addEventListener("click", function() {
        screenAppend(button.innerText);
        displayUpdate(firstNum, operation, secondNum);
    })
);

operatorButtons.forEach((button) =>
    button.addEventListener("click", function() {
        chooseOperation(button.innerText);
        displayUpdate(firstNum, operation, secondNum);
    })
);

clearButton.addEventListener("click", function() {
        clear();
        displayUpdate(firstNum, operation, secondNum);
    });

equalButton.addEventListener("click", function() {
    compute(to_display);
});

