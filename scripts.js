//getting the display
const display = document.querySelector(".display");

//getting all the number buttons
var buttons = document.querySelectorAll(".no");

//adding the same event listener to all the number buttons
buttons.forEach(function (btn) {
    btn.addEventListener("click", onClickNumber);
});

//function to take the current no and add the pressed number to the display
function onClickNumber(e) {
    let content = e.currentTarget.innerText;
    const d = display.innerHTML;
    content = d + content;
    if (content.length > 5) {
        content = content.substr(1, 5);
    }
    display.innerHTML = parseInt(content);
}

//adding the clear function to the clear button
document.querySelector(".clear").addEventListener("click", clear);
function clear() {
    display.innerHTML = 0;
}

//adding the backspace function to the backspace button
document.querySelector(".backspace").addEventListener("click", back);
function back() {
    let content = display.innerHTML;

    if (content.length === 1) {
        display.innerHTML = 0;
    } else {
        content = content.substr(0, content.length - 1);
        display.innerHTML = content;
    }
}

let previousContent = 0;
let operation = "=";
//adding the equal button function to the button
document.querySelector(".equal").addEventListener("click", equal);
function equal() {
    let content = Math.round(parseInt(display.innerHTML));

    switch (operation) {
        case "/":
            display.innerHTML = previousContent / content;
            operation = "=";
            break;
        case "*":
            display.innerHTML = previousContent * content;
            operation = "=";
            break;
        case "-":
            display.innerHTML = previousContent - content;
            operation = "=";
            break;
        case "+":
            display.innerHTML = previousContent + content;
            operation = "=";
            break;
        default:
            display.innerHTML = content;
            operation = "=";
            break;
    }
}

//adding the divide function to the button
document.querySelector(".divide").addEventListener("click", divide);
function divide() {
    previousContent = Math.round(parseInt(display.innerHTML));
    display.innerHTML = 0;
    operation = "/";
}

//adding the multiply function to the button
document.querySelector(".multiply").addEventListener("click", multiply);
function multiply() {
    previousContent = Math.round(parseInt(display.innerHTML));
    display.innerHTML = 0;
    operation = "*";
}
//adding the minus function to the button
document.querySelector(".minus").addEventListener("click", minus);
function minus() {
    previousContent = Math.round(parseInt(display.innerHTML));
    display.innerHTML = 0;
    operation = "-";
}
//adding the plus function to the button
document.querySelector(".plus").addEventListener("click", plus);
function plus() {
    previousContent = Math.round(parseInt(display.innerHTML));
    display.innerHTML = 0;
    operation = "+";
}
