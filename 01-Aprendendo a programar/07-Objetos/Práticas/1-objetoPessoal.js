// 1. Crie um objeto com seu nome, idade e profissão.
const pessoa = {
    nome: "Raney",
    idade: 33,
    profissao: "Programador"
}
// 2. Acesse e exiba o valor da propriedade "nome" no console.
console.log(pessoa.nome)

// 3. Modifique a propriedade "idade" com um novo valor.
pessoa.idade = 34
console.log("Idade: ", pessoa.idade)

// 4. Adicione ao objeto uma nova propriedade chamada "cidade".
pessoa.cidade = "São Luís"
console.log("Cidade: ", pessoa.cidade)

// 5. Crie uma função que recebe um objeto pessoa e retorna uma frase com seus dados.
function apresentarPessoa(p) {
    return `Olá! meu nome é ${p.nome}, tenho ${p.idade} anos e sou ${p.profissao}`
}
console.log(apresentarPessoa(pessoa))

// 6. Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.
const pessoas = [
    {nome: "Ana", idade: 17},
    {nome: "José", idade: 21},
    {nome: "Maria", idade: 22}
]

// 7. Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.
const maiorIdade = pessoas.filter((p) => {
    return p.idade >= 18
})
console.log("Pessoas com 18 anos ou mais: ", maiorIdade)

// 8. Crie um objeto com um método chamado "saudacao" que imprime "Olá, eu sou [nome]".
const usuario = {
    nome: "Raney",
    saudacao: function() {
        console.log("Olá, eu sou ", [this.nome])
    }
}
usuario.saudacao()

// 9. Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício

for (const propriedades in pessoa) {
    console.log("Chave: ", propriedades)
    console.log("Valor: ", pessoa[propriedades])    
}

// 10. Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).

const produto = {
    preco: 100,
    quantidade: 2
}

let valorCompra = produto.preco * produto.quantidade
console.log(`Valor total da compra: ${valorCompra}`)