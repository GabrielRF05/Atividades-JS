let operacao = parseInt(prompt("Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));

valor1 = parseFloat(prompt("Insira o primeiro valor"));
valor2 = parseFloat(prompt("Insira o segundo valor"));
resultado = 0;

if (operacao == 1) {
    resultado = valor1 + valor2;
} else if (operacao == 2) {
    resultado = valor1 - valor2;
} else if (operacao == 3) {
    resultado = valor1 * valor2;
} else if (operacao == 4) {
    resultado = valor1 / valor2;
}

alert("O resultado da operação é: " + resultado.toFixed(2));
