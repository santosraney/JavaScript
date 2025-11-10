// Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).
const nota = 8.5
if (nota >= 9 && nota <= 10) {
    console.log("A")
} else if (nota >= 8 && nota <=9) {
    console.log("B")
} else if (nota >= 6 && nota <=7.9) {
    console.log("C")
} else if (nota >= 4 && nota <=5.9) {
    console.log("D")
} else if (nota >= 0 && nota <=3.9) {
    console.log("E")
} else {
    console.log("Nota inválida")
}