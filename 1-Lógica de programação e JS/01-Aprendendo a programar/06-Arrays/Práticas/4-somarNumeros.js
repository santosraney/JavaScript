// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0

for (i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

console.log(`Soma: ${soma}`)