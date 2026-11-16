// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.
const pessoa = { 
    nome: "Raney",
    idade: 33,
    email: "raney@gmail.com"
}

const { nome, idade, email } = pessoa

console.log({ nome, idade, email })
