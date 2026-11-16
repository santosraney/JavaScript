// Crie uma função que receba vários números como parâmetros usando o operador rest (...).
// Utilize um laço for para somar todos os valores recebidos e retorne o total.
function somarNumeros(...numeros) {
    let total = 0

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i]
    }

    return total
}

console.log(somarNumeros(1, 2, 3, 4, 5))