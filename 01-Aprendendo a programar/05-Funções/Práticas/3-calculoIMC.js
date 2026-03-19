// Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
// A função deve calcular o IMC utilizando a fórmula:
// IMC = peso / (altura * altura)
// A função deve retornar o valor do IMC.
// Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

console.log(`Resultado ${calcularIMC(92, 1.70).toFixed(2)}`)
