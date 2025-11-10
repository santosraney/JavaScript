// Crie um menu simples que exibe opções como "1 - Ver saldo", "2 - Fazer depósito", "3 - Sair". Use do...while para repetir o menu até o usuário escolher sair.
let opcoes = [1, 2, 4, 5, 1, 2, 3]
let i = 0
let num

do {
    num = opcoes[i]

    if (num === 1) {
        console.log("Saldo")
    } else if (num === 2) {
        console.log("Depósito")
    } else if (num === 3) {
        console.log("Sair")
    } else {
        console.log("Opção inválida")
    }
    i++

} while (num !== 3)
