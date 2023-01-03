// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("node.js")

// adicionar no começo
techs.unshift("sql")

// remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elementos
// console.log(techs.slice(1,3))

//remover 1 ou mais intes em qualquer posição
// techs.splice(1,2)

//encontrar a posição de um elemento
let index = techs.indexOf() // inclur posição ou nome do elemento.

// console.log(techs)

// TRANSFORMAR UMA CADEIA DE CARACTERES EM ELEMENTOS DE UM ARRAY

let word = "manipulação"
// console.log(Array.from(word))

// contar elementos de um array
// console.log([
//   "a",
//   {type: "array"},
//   function() {return "hello"}
// ])

// Criar Array com construtor
// let myArray = new Array('a', 'b', 'c')
// console.log(myArray)

// Manipulano Strings e Arrays

let phrase = "Eu amo a Larissinha"
console.log(phrase)
let newArraySplit = phrase.split(" ").join("_")
console.log(newArraySplit)

// Manipulando Strings

// Verificar se o texto contém a palavra amor.

let frase = "Eu eu quero viver o amor"
console.log(frase.includes("amor"))

// Transformar número quebrado com menos casas decimais e trocrar ponto por vírgula
let number = 456.8979854
console.log(number.toFixed(2).replace(".", ","))
