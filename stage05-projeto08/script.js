const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const result = document.querySelector(".result")

const alertError = document.querySelector(".alert-error")

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  open() {
    Modal.wrapper.classList.add('open')
  },
  
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

form.onsubmit = event => {
  event.preventDefault()
  
  const weightValue = Number(weight.value)
  const heightValue = Number(height.value)
  
  if (weightValue <= 0 || heightValue <= 0) {
    alertError.classList.add('open')
    return null;
  }
  
  const imc = weightValue / (heightValue / 100) ** 2
  Modal.message.textContent = `Seu IMC é de ${imc.toFixed(2)}`
  Modal.open()
  
  closeModal()
  
  resetValues()
}


function resultIMC() {
  
}

function closeModal() {
  Modal.buttonClose.addEventListener("click", function () {
    Modal.close()
  })
}

function resetValues() {
   weight.value = ""
   height.value = ""
   alertError.classList.remove('open')
}

