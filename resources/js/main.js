const keys = Array.from(document.querySelectorAll('button'));
const display = document.getElementById('display');
const calculator = document.getElementById('calculator');

function calculate(n1, op, n2) {
  if (op === 'add') {
    display.textContent = n1 + n2;
  }
  if (op === 'subtract') {
    display.textContent = n1 - n2;
  }
  if (op === 'multiply') {
    display.textContent = n1 * n2;
  }
  if (op === 'divide') {
    display.textContent = n1 / n2;
  }
}

function keyAction(e) {
  const action = e.target.dataset.action;
  const numberDisplayed = display.textContent;
  var operation = calculator.dataset.operator;

  if (!action){
    const keyValue = e.target.textContent;

    if (numberDisplayed === '0') {
      display.textContent = keyValue;
    } else {
      display.textContent = numberDisplayed + keyValue;
    }
  } else {

    if (action === 'decimal') {
      if (!numberDisplayed.includes('.')) {
        display.textContent = numberDisplayed + '.';
      }
    }

    if (action === 'add' || action === 'subtract' || action === 'divide' || action === 'multiply') {
      calculator.dataset.firstNumber = numberDisplayed;
      calculator.dataset.operator = action;
      display.textContent = '0';
    }

    if (action ==='clear') {
      delete calculator.dataset.firstNumber;
      delete calculator.dataset.operator;
      display.textContent = '0';
    }

    if (action === 'equal' && operation){
      var firstNumber = parseFloat(calculator.dataset.firstNumber);
      var secondNumber = parseFloat(numberDisplayed);
      calculate(firstNumber, operation, secondNumber);
    }

    if (action === 'delete') {
      display.textContent = numberDisplayed.slice(0, -1);
    }
  }

}

keys.forEach(key => key.addEventListener('click', keyAction));
