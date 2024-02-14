let output = document.getElementById("output");
let theme = false;

function addToOutput(num) {
    output.value += num;
}

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (e) {
        alert("Invalid Expression");
    }
}

function clearOutput() {
    output.value = "";
}

function deleteLast() {
    output.value = output.value.slice(0, -1);
}

function toggleTheme() {
    const calculator = document.querySelector('.calculator');
    const buttons = document.querySelectorAll('.button');

    if (!theme) {
        calculator.classList.add('theme-dark');
        buttons.forEach(button => button.classList.add('theme-dark'));
    } else {
        calculator.classList.remove('theme-dark');
        buttons.forEach(button => button.classList.remove('theme-dark'));
    }
    theme = !theme;
}

