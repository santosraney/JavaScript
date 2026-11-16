// Contar quantos números pares e quantos números ímpares nós temos entre 0 e 100
let totalNumerosPares = 0
let totalNumerosImpares = 0

for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        totalNumerosPares++
    } else {
        totalNumerosImpares++
    }
}

console.log(`Total de números pares: ${totalNumerosPares}`)
console.log(`Total de números ímpares: ${totalNumerosImpares}`)