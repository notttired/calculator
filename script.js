const displayNumber = document.querySelector(".displayNumber")
let savedNumber;
let isOperating = false;
let currentOperator = ""

const subtractBtn = document.querySelector(".subtract");
const addBtn = document.querySelector(".add");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const plusminus = document.querySelector(".plusminus");
const modulus = document.querySelector(".modulus");


addBtn.addEventListener("click", () => {operate("addBtn")});
subtractBtn.addEventListener("click", () => {operate("subtractBtn")});
multiplyBtn.addEventListener("click", () => {operate("multiplyBtn")});
divideBtn.addEventListener("click", () => {operate("divideBtn")});
modulus.addEventListener("click", () => {operate("modulus")});
equalBtn.addEventListener("click", () => {operateClose()}); // equals when already closed?!

plusminus.addEventListener("click", () => {displayNumber.innerText = operationFunctions.plusminus(displayNumber.innerText);});
clear.addEventListener("click", () => {
    displayNumber.innerText = 0;
    isOperating = false;
});


// Keying in a number

function extraNum(num) {
    displayNumber.innerText = displayNumber.innerText * 10 + num; // NO TYPE ERROR
}

document.querySelectorAll(".number").forEach(
    (numNode) => {numNode.addEventListener("click", () => {extraNum(Number(numNode.innerText))})}
)

// Operations

operationFunctions = {
    addBtn(a,b) {return Number(a) + Number(b);},
    subtractBtn(a,b) {return a - b;},
    multiplyBtn(a,b) {return a * b;},
    divideBtn(a,b) {return (b == 0) ? 0 : a / b;},
    plusminus(a) {return -a},
    modulus(a,b) {return a % b},
}

// if it is currently operating, calculate the result and run it again
function operate(operator) { // operator is a string
    if (isOperating === true) {
        operateClose();
    }
    isOperating = true;
    savedNumber = displayNumber.innerText;
    displayNumber.innerText = 0;
    currentOperator = operator;
}

// calculate the current result using display number, saved number, operator
function operateClose() {
    if (isOperating) {
    console.log(operationFunctions[currentOperator](savedNumber, displayNumber.innerText));
    displayNumber.innerText = operationFunctions[currentOperator](savedNumber, displayNumber.innerText);
    isOperating = false;}
}