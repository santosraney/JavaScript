// Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
// A função deve receber dois parâmetros: valorCompra e valorPago.
// A função deve:
// calcular o valor do troco
// retornar o valor calculado
// Depois, utilize o retorno da função para exibir o valor do troco no console.

function calcularTroco(valorCompra, valorPago) {
    return valorPago - valorCompra
}

console.log(`Troco: ${calcularTroco(95, 100)}`)