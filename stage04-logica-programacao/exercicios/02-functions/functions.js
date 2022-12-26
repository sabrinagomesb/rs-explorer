// const sum = function(number1, number2) {
//   console.log(number1 + number2)
// }

// sum(2,3)

// const sayMyName = (callback, name) => {

// }

// const question = () => {
//   console.log("Qual o seu nome?")
// }

// sayMyName(() => {
//   console.log("Qual o seu nome?")
// }, "Sabrina")

function greeting(name) {
  alert(`Hello, ${name}`)
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.")
  callback(name)
}

processUserInput(greeting)
