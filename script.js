function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*').replace('−', '-'));
    } catch (error) {
        display.value = 'Erro';
    }
}
