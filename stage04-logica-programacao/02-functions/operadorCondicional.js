// Operador condicional (Ternário)

// Dependendo da condição são recebidos valores diferentes.

// Estrutura: condição ENTÃO valor 1 SENÃO valor 2
//            condition ? value1 : value2

let pao = false
let queijo = true

const niceBreakfast = pao && queijo ? "cafe da manha top" : "cafe da manha ruim"
console.log(niceBreakfast)

const niceCafe = pao || queijo ? "cafe top" : "cafe ruim"
console.log(niceCafe)

let age = 17
const canDrive = age >= 16 ? "can drive" : "can't drive"
console.log(canDrive)
