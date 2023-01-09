// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)

// Funções callback
function handleTryClick(event) {
  event.preventDefault() // não faça o padrão desse evento (submit form)

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    document.querySelector(".screen2 h2").innerText =
      xAttempts === 1
        ? `Você acertou de primeira!`
        : `Você acertou em ${xAttempts} tentativas.`
  }
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}


