

class Calculator {

    constructor(previousElementText, currentElementText) {
        this.previousElementText = previousElementText;
        this.currentElementText = currentElementText;
        this.clear();
    }


    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    deleteOperation() {

        this.currentOperand = this.currentOperand.slice(0, -1);

    }


    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return

        this.currentOperand += number;
    }

    compute() {
        let computation;
        const pre = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(pre) || isNaN(current)) return

        switch (this.operation) {
            case '+':
                computation = pre + current;
                break;
            case '-':
                computation = pre - current;
                break;
            case '*':
                computation = pre * current;
                break;
            case '/':
                computation = pre / current;  
                break;   
            case '%': 
                computation = (pre * current) / 100;  
                break;    

            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';



    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }


    getDisplayNumber(number) {
        const floatNumber = parseFloat(number);
        if (isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en');
    }

    updateDisplay() {
        this.currentElementText.textContent = this.getDisplayNumber(this.currentOperand);

        if (this.operation != null) {
            this.previousElementText.textContent = `${this.getDisplayNumber(this.previousOperand)}${this.operation}`
        } else {
            this.previousElementText.textContent = this.previousOperand;
        }
    }



}



const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteOperation = document.querySelector('[data-delete]');
const allClear = document.querySelector('[data-all-clear]');
const equals = document.querySelector('[data-equals]');

const previousElementText = document.querySelector('[data-previous-operand]')
const currentElementText = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousElementText, currentElementText);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay();
    })
})


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.textContent);
        calculator.updateDisplay();
    })
})


equals.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay()
})

deleteOperation.addEventListener('click', button => {
    calculator.deleteOperation();
    calculator.updateDisplay();
})


allClear.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})