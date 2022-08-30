let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("digite outro númeor"))

console.log(`1º:${num1} 2º:${num2}
O primeiro número é maior que o segundo? ${num1 > num2}
O primeiro número é igual a segundo? ${num1 === num2}
O primeiro número é divisível pelo segundo? ${num1 % num2 === 0}
O segundo número é divisível pelo primeiro? ${num2 % num1 === 0}
`)