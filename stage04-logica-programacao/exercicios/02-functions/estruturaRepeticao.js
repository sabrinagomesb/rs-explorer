// Estrutura de Repetição

// for
// break PARA a execução do loop
for (let i = 100; i > 0; i--) {
  if (i === 50) {
    break
  }
  console.log(i)
}

// continua PULA a execução do momento
for (let i = 10; i > 0; i--) {
  if (i === 5) continue
  console.log(i)
}

// for... of
// -> funciona para strings e arrays.
let name = "Mayk"
let names = ["Joao", "Paulo", "José"]

for (let char of name) {
  console.log(char)
}

for (let data of names) {
  console.log(data)
}

// for... in
let person = {
  name: "Sabrina",
  age: 30,
  weigth: 70.8,
}
for (let property in person) {
  console.log(property)
  console.log(person)
  console.log(person.name)
  console.log(person.age)
  console.log(person[property])
}
// !! DIFERENÇA ENTRE FOR...IN E FOR...OF: FOR...IN acessa as propriedades e o FOR...OF acessa os valores de uma estrutura de dados.

// While
let i = 0
while (i < 10) {
  console.log(i)

  i++
}
