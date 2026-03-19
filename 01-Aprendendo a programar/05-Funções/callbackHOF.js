// HOF -> Higher-OrderFunction === função que recebe outra função como parâmentro

function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function soma(num1, num2) {
    return num1 + num2
}

function divisao(num1, num2) {
    return num1 / num2
}

const resultadoSoma = calcular(3, 8, soma) // soma é um callback
console.log(`Resultado da soma: ${resultadoSoma}`)

const resultadoDivisao = calcular(32, 8, divisao) // divisão é um callback
console.log(`Resultado da divisão: ${resultadoDivisao.toFixed(2)}`)