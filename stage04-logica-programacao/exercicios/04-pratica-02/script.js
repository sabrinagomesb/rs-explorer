/* Solicite 2 números e faça a soma deles.
Apresente o resultado final ao usuário */

 
  alert("Iremos somar 2 números");
  numberOne = prompt("Digite o primeiro número");
  numberTwo = prompt("Digite o segundo número");
  result = Number(numberOne) + Number(numberTwo);
  alert(`Resultado final: ${result}`);

/* o prompt retorna um dados do tipo string mesmo que seja digitado um número */