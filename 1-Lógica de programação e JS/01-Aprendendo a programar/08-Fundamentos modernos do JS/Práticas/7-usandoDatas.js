// Crie uma variável com a data atual e exiba o dia, mês e ano formatados.
const dataAtual = new Date()

const dataLegivel = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
}).format(dataAtual)

console.log(dataLegivel)
