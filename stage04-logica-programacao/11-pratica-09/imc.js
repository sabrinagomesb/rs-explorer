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

function calculeIMC(index) {
  const heigth = patients[index].heigth / 100
  const imc = patients[index].weight / heigth ** 2

  return Number(imc.toFixed(2))
}

console.log(calculeIMC(2))
