/* Capturar 2 números e realizar as operações matemáticas:
-> Soma;
-> Subrtração;
-> Multiplicação;
-> Divisão e resto da divisão. */

alert('Vamos iniciar os cálculos!')
let firstNumber = Number(prompt('Digite o primeiro número'))
let secondNumber = Number(prompt('Digite o segundo número'))

// firstNumber = Number(firstNumber)
// secondNumber = Number(secondNumber)

const add = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const divis = firstNumber / secondNumber
const restDivis = firstNumber % secondNumber

alert(`A soma é: ${add}`)
alert(`A subtração é: ${sub}`)
alert(`A multiplicação é: ${multi}`)
alert(`A divisão é: ${divis}`)
alert(`O resto da divisão é: ${restDivis}`)
alert('FIM DO PROGRAMA!')

