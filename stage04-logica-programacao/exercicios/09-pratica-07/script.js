/*
Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá, usuário! Digite o número da opção desejada.

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa

O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:
- Caso o usuário digite 1: poderá cadastrar um item em ma lista.
- Caso o usuário digite 2: poderá ver os intes cadastrados.
  Se não houver nnehum intem cadastrado, mostrar a mensagem: "Não existem itens cadastrados"
- Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let option;
let items = []

while(option != 3) {
  
  let option = Number(
    prompt(`
  Olá, usuário! Digite o número da opção desejada.
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `)
  )
  
  if (option == 1) {
    let item = prompt('Digite o nome do item')
    items.push(item)
  }
  
  else if (option == 2) {
  
    if (items.length == 0) {
      alert("Não existem itens cadastrados")
    } else {
      alert(items)
    }
  } else {
    alert("Tchau")
  }
  console.log(option, items)
  
}

