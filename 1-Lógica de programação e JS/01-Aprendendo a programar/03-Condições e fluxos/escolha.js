// 9 e 10: excelente
// 7 e 8: bom 
// 4 e 6: médio
// 0 e 3: ruim
const notaAluno = -2

switch (notaAluno) {
    case 10:
    case 9:
        console.log("Excelente")
        break
    case 8:
    case 7:
        console.log("Bom")
        break
    case 6:
    case 5:
    case 4:
        console.log("Médio")
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("ruim")
        break
    default:
        console.log("Valor inválido")
        break
}