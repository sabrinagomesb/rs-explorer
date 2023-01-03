/*

** JOGO DE ADIVINHAÇÃO **
Apresente a mensagem ao usuário: 
"Advinhe o número que estou pensando."

Gerar um número aleatório e verificar se o número digitado é o mesmo que foi gerado pelo sistema.

Enquanto o usuário não adivinhar o núemro, mostrar a mensagem: "Erro, tente novamente:"

Caso o usuário acerte número, apresentar a mensagem:
"Parabéns!" Você adivinhou o número em x tentativas."

Subustitua o "x" da mensagem pelo número de tentativas */

let result = prompt("Advinhe o número que estou pensando. Está entre 0 e 10.")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while (Number(result) != randomNumber) {
  result = prompt("Erro! Tente novamente.")
  xAttempts++
}
alert(`Parabéns! O número que eu pensei foi ${randomNumber}. Você adivinhou em ${xAttempts} tentativas.`)


// Enquanto a variável MATCH não for verdadeira gerar alert: "Erro, tente novamente"
