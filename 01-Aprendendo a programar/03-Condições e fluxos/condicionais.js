const idade = 17

// if (idade >= 18) {
//     console.log("É maior de idade")
// } else {
//     console.log("É menor de idade")
// }

idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade")

const notaDoAluno = 8;

// if (notaDoAluno >= 9) {
//     console.log("Nota excelente");
// } else if (notaDoAluno >= 7) {
//     console.log("Nota boa");
// } else if (notaDoAluno >= 4) {
//     console.log("Nota mediana");
// } else {
//     console.log("Nota ruim");
// }

notaDoAluno >= 9 ? console.log("Excelente") : 
    notaDoAluno >= 7 ? console.log("Nota boa") :
    notaDoAluno >= 4 ? console.log("Nota mediana") :
    console.log("nota ruim")