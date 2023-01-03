/* Crie uma lista de pacientes

Cada paciente dentro da lista deverá conter:
 -> nome;
 -> idade;
 -> weight;
 -> heigth.

Escreva uma lista contendo o nome dos pacientes */

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
]

// REESCREVENDO COM FOR...OF


let patientsNames = []
let patientsAges = []
let patientsWeights = []
let patientsHeigths =[]


for(let patient of patients) {
  patientsNames.push(patient.name)
  patientsAges.push(patient.age)
  patientsWeights.push(patient.weight)
  patientsHeigths.push(patient.heigth)
}

alert(
  `Pacientes: ${patientsNames}
  Idades: ${patientsAges}
  Pesos: ${patientsWeights}
  Alturas(cm): ${patientsHeigths}`
)


// // alert(patientsNames)

// // let patientsAges = []

// for(let patient of patients) {
//   patientsAges.push(patient.age)
// }

// // alert(patientsAges)

// // let patientsWeights = []
// for(let patient of patients) {
//   patientsWeights.push(patient.weight)
// }

// // alert(patientsWeights)


// let patientsNames = []
// for(let index = 0; index < patients.length; index++) {
//   patientsNames [index] = patients[index].name

// }

// alert(patientsNames)

// alert(patients[0].name)

// console.log('aqui', patients)

