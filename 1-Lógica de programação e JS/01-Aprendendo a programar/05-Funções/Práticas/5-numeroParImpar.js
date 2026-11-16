// Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.

function ehPar(numero) {
    if (numero % 2 == 0) {
        console.log("é par")
    } else {
        console.log("é ímpar")
    }
}

ehPar(7)
ehPar(8)
ehPar(9)
ehPar(10)
ehPar(-5)
ehPar(6.75)
ehPar(0)