export function calcIMC(weight, height) {
  return weight / (height / 100) ** 2
}
