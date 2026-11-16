// Defina uma variável numeroSecreto com o valor 7. O usuário tem 3 tentativas para acertar (simule essas tentativas com variáveis). Mostre mensagens de "Acertou!" ou "Tente novamente".
const numeroSecreto = 7
let tentativas = [3, 9, 7]

for (let i = 0; i < 3; i++) {
    if (tentativas[i] === numeroSecreto) {
        console.log("Acertou!")
        break
    } else {
        console.log("tente novamente")
    }
}