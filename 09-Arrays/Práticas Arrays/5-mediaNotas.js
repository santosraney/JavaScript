// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.
let numeros = [10, 9.5, 8, 7.5]
let soma = 0
let media = 0

for (const numero of numeros) {
    soma += numero
}

media = soma / 4
console.log(`Média das notas: ${media}`)

if (media >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}