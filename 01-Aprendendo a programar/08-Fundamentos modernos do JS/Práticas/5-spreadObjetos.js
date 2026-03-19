// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.
const nomes = { nome: "Raney" }

const idades = { idade: 34 }

const pessoa = { ...nomes, ...idades }

console.log(pessoa)