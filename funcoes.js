// function saudacao(nome) { // nome é um parâmetro da função saudação
//     console.log(`Olá, ${nome}`)
// }

// const saudacao = (nome) => {
//     console.log(`Vida longa e próspera, ${nome}`)
// }

const saudacao = nome => console.log(`Olá, ${nome}`)

saudacao("Raney") // Raney é o "argumento"
saudacao("Jéssica")
saudacao("Nathália")

// function calcularDobro(numero) {
//     return numero * 2
// }

// const calcularDobro = (numero) => {
//     return numero * 2
// }

const calcularDobro = numero => numero * 2

calcularDobro(4)

const numeroDobrado = calcularDobro(4)
console.log(`O dobro de 4 é ${numeroDobrado}`)

console.log("oi", "tudo", "bem", "?")