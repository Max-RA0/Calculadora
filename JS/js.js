let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousInput = '';

function handleClick(value) {
  if (!isNaN(value) || value === '.') {
    currentInput += value;
    display.textContent = currentInput;
  } else if (value === 'AC') {
    currentInput = '';
    previousInput = '';
    operator = null;
    display.textContent = '0';
  } else if (value === '=') {
    if (operator && previousInput) {
      currentInput = eval(previousInput + operator + currentInput).toString();
      display.textContent = currentInput;
      previousInput = '';
    }
  } else {
    if (currentInput) {
      previousInput = currentInput;
      currentInput = '';
      operator = value === '÷' ? '/' : (value === 'x' ? '*' : value);
    }
  }
}