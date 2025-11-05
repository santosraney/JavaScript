// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.
const valores = [100, 229.90, 1500, 4489.90]

const desconto10 = valores.map((numero) => {
    return (numero * 0.90).toFixed(2)
})

console.log(`Preço dos produtos: ${valores}`)
console.log(`Preço com desconto: ${desconto10}`)