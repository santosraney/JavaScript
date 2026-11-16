const idade = 15
const maiorDeIdade = idade >= 18
const possuiCNH = true

const podeDirigir = maiorDeIdade && possuiCNH //AND
console.log(`Pode dirigir? ${podeDirigir}`)


const podeViajarSozinha = maiorDeIdade || possuiCNH //OR
console.log(`Pode viajar sozinho? ${podeViajarSozinha}`)

const precisaDeAcompanhante = !maiorDeIdade //NOT
console.log(`Precisa de acompanhante? ${precisaDeAcompanhante}`)

