const display = document.getElementById('display');
        const buttons = document.querySelectorAll('.button');
        let currentInput = '0';
        let operator = null;
        let previousInput = '';
      
        buttons.forEach(button => {
          button.addEventListener('click', () => {
            const value = button.textContent;
      
            if (!isNaN(value) || value === '.') {
              // Número o punto
              if (currentInput === '0') {
                currentInput = value;
              } else {
                currentInput += value;
              }
              display.textContent = currentInput;
            } else if (value === 'Borrar') {
              // Botón de borrar
              currentInput = '0';
              previousInput = '';
              operator = null;
              display.textContent = currentInput;
            } else if (value === '=') {
              // Botón de igual
              if (operator && previousInput !== '') {
                currentInput = evaluate(previousInput, currentInput, operator);
                display.textContent = currentInput;
                operator = null;
                previousInput = '';
              }
            } else {
              // Operador
              if (operator && previousInput !== '') {
                currentInput = evaluate(previousInput, currentInput, operator);
                display.textContent = currentInput;
              }
              operator = value;
              previousInput = currentInput;
              currentInput = '';
            }
          });
        });
      
        function evaluate(a, b, operator) {
          const num1 = parseFloat(a);
          const num2 = parseFloat(b);
          switch (operator) {
            case '+':
              return (num1 + num2).toString();
            case '-':
              return (num1 - num2).toString();
            case '×':
              return (num1 * num2).toString();
            case '÷':
              return num2 !== 0 ? (num1 / num2).toString() : 'Error';
            default:
              return b;
          }
        }