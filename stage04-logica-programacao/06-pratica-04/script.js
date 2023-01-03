/* 
-> Solicitar o nome do aluno e as 3 notas do BIMESTRE.
-> Calcular a média do aluno.
-> Se a média for maior que 6, o aluno passou no bismestre.
-> Se a média for menor que 6, o aluno não passou no bimestre.
-> Mostrar mensagem com o nome do aluno e a nota em ambos os casos. */

let student = prompt("Qual o nome do aluno?")
let score1 = prompt("Qual a PRIMEIRA nota?")
let score2 = prompt("Qual a SEGUNDA nota?")
let score3 = prompt("Qual a TERCERIA nota?")

let average = ((Number(score1) + Number(score2) + Number(score3)) / 3).toFixed(2)

if (average > 6) {
  alert(`PARABÉNS, ${student}! Você foi aprovado com a média ${average}`)
} else {
  alert(`Que pena, ${student}. Infelizmente você não foi aprovado. Sua média é ${average}`)
}