// Crie um array de preços e calcule o valor total da compra. Depois, aplique um cupom de 20% de desconto e mostre o valor final.
const valores = [99.90, 149.90, 249,90, 2564.90]
let soma = 0

for (const valor of valores) {
    (soma += valor).toFixed(2)
}

console.log(`Valor total: ${soma}`)

desconto20 = soma * 0.80

console.log(`Valor total com desconto de 20%: ${desconto20}`)
