/* 
Capture 10 itens para compor a lista de um supermercado.
Após capturar os 10 itens, imprima-os, separando por vírgula */

alert('INFORME 5 ITENS DA SUA LISTA DE COMPRAS')


let items = []

for (let item = 1; item < 6; item++) {
  let itemName = prompt(`Digite item ${item} para lista`)
  items.unshift(itemName)
}

alert(items)

//FILA
// push
// pop
// unshift
// shift