let real = parseFloat(prompt("Insira um valor em reais para conversão"));

let dolar = real * 0.183;
let euro = real * 0.165;

alert("Valor em dólar: " + dolar.toFixed(2) + "\nValor em euro: " + euro.toFixed(2)); 