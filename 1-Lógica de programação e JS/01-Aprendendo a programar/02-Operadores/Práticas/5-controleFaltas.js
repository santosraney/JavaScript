// Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console.
const totalAulas = 80
faltas = 25
let limiteFaltas = totalAulas * 0.25

if (limiteFaltas > 20) {
    console.log("Ultrapassou o limite de faltas")
} else {
    console.log("Não ultrapassou o limite de faltas")
}