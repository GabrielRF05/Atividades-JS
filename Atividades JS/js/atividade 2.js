let peso = parseFloat(prompt("Insira seu peso em kg: "));
let altura = parseFloat(prompt("Insira sua altura em metros: "));

let imc = peso / (altura * altura);

if(imc < 18.5){
    alert("Classificação: Magreza");
}
else if(imc > 18.5 && imc < 24.9){
    alert("Classificação: Normal");
}
else if(imc > 25 && imc < 29.9){
    alert("Classificação: Sobrepeso\nSeu grau de obesidade é: I");
}
else if(imc > 30 && imc < 39.9){
    alert("Classificação: Obesidade\nSeu grau de obesidade é: II");
}
else {
    alert("Classificação: Obesidade Grave\nSeu grau de obesidade é: III");
}