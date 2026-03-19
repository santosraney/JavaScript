// Mostre no console quantos números entre 1 e 100 são divisíveis por 3.
console.log("Números divisíveis por 3 entre 1 e 100:")

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}