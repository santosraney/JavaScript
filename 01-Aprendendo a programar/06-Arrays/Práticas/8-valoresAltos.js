// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.
const idades = [33, 20, 31, 15, 16, 17, 18, 19, 21]

const maiorDeIdade = idades.filter((idade) => {
    return idade >= 18
})

console.log(maiorDeIdade)