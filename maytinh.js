function getValues() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    return { a, b };
}

function showResult(label, value) {
    document.getElementById('result').textContent = `Result ${label} : ${value}`;
}

function validate(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
        document.getElementById('result').textContent = 'Please enter both numbers.';
        return false;
    }
    return true;
}

function add() {
    const { a, b } = getValues();
    if (!validate(a, b)) return;
    showResult('Addition', a + b);
}

function sub() {
    const { a, b } = getValues();
    if (!validate(a, b)) return;
    showResult('Subtraction', a - b);
}

function mul() {
    const { a, b } = getValues();
    if (!validate(a, b)) return;
    showResult('Multiplication', a * b);
}

function divide() {
    const { a, b } = getValues();
    if (!validate(a, b)) return;
    if (b === 0) {
        document.getElementById('result').textContent = 'Cannot divide by 0.';
        return;
    }
    showResult('Division', a / b);
}
document.getElementById('add').addEventListener('click', add);
document.getElementById('sub').addEventListener('click', sub);
document.getElementById('mul').addEventListener('click', mul);
document.getElementById('div').addEventListener('click', divide);