const patients = [
  {
    name: "Luiz",
    age: 30,
    weight: 97,
    heigth: 185,
  },

  {
    name: "Cesar",
    age: 37,
    weight: 100,
    heigth: 173,
  },

  {
    name: "Felipe",
    age: 26,
    weight: 81,
    heigth: 170,
  },
  {
    name: "Carlos",
    age: 10,
    weight: 41,
    heigth: 70,
  },
]

let somaIMC = 0

function calculateIMC(patient) {
  const imc = patient.weight / (patient.heigth / 100) ** 2
  return Number(imc.toFixed(2))
}

for (let patient of patients) {
  alert(`${patient.name} tem o IMC ${calculateIMC(patient)}`)
}


console.log(somaIMC)
