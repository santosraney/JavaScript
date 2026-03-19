const idade = 16
const minhaIdade = 33

// const comparacao = idade == minhaIdade
const comparacao = idade != minhaIdade
// const comparacao = idade > minhaIdade
// const comparacao = idade < minhaIdade
// const comparacao = idade <= minhaIdade
// const comparacao = idade >= minhaIdade
console.log(`São iguais? ${comparacao}`)

const maiorDeIdade = idade >= 18
const souMaiorDeIdade = minhaIdade >= 18
console.log(`Maior de idade? ${maiorDeIdade}`)
console.log(`Sou maior de idade? ${souMaiorDeIdade}`)

const comparacaoEstrita = minhaIdade === idade
console.log(`São estritamente iguais? ${comparacaoEstrita}`)