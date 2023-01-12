let weight = document.querySelector("#weight")
let height = document.querySelector("#height")
let btn = document.querySelector(".btn")
let result = document.querySelector(".result")

btn.addEventListener("click", resultIMC)


function resultIMC(event) {
  event.preventDefault()
  
  const weightValue = Number(weight.value)
  const heightValue = Number(height.value)
  
  if (weightValue <= 0 || heightValue <= 0) {
    alert("[ERRO!] Insira os dados corretamente (apenas números).")
    return null;
  }
  
  const imc = weightValue / (heightValue / 100) ** 2
  result.innerHTML = `IMC = ${imc.toFixed(2)}`
  result.classList.remove("hide")
  
  resetValues()
}

function resetValues() {
   weight.value = ""
   height.value = ""
} 
