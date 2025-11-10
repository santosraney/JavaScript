// Use do...while para simular a entrada de números. O programa deve continuar até que o usuário digite 0. Ao final, mostre quantos números foram digitados.
let numerosDigitados = [1, 2, 3, 4, 5, 0] // Simula entrada de dados
let i = 0 // Posição atual no array
let contador = 0 // Quantos números foram digitados
let num // Variável para armazenar o número atual

do {
    num = numerosDigitados[i] // Pega o número da lista
    console.log(`Número digitado: ${num}`)
    
    if (num !== 0) {
        contador++ // Soma +1 se o número for diferente de zero
    }

    i++ // Vai para o próximo número da lista
} while (num !== 0); // Repete até o número ser 0

console.log(`Total de números digitados: ${contador}`)