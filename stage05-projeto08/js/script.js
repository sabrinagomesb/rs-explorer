import { AlertError } from "./alert-error.js"
import { openModalWithMessage } from "./modal.js"
import { calcIMC } from "./utils.js"

const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault()
  const weightValue = Number(weight.value)
  const heightValue = Number(height.value)

  if (weightValue <= 0 || heightValue <= 0) {
    AlertError.open()
    return
  }

  const imc = calcIMC(weightValue, heightValue)
  openModalWithMessage(`Seu IMC é de ${imc.toFixed(2)}`)

  weight.value = ""
  height.value = ""
  AlertError.close()
}
