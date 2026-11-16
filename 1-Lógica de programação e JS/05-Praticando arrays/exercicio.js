// Imagine que você está desenvolvendo um sistema para controlar uma lista de compras. O primeiro passo é permitir que a pessoa usuária acesse e altere os itens dessa lista.
// Escreva um programa que:
// Crie um array com os itens iniciais da lista de compras.
// Acesse e exiba o segundo item da lista.
// Modifique o último item da lista para um novo valor.
const listaDeCompras = ["arroz", "feijão", "macarrão", "tomate"]
console.log(listaDeCompras[1])
listaDeCompras.pop()
listaDeCompras.push("ABACATE")
console.log(`lista após modificação: ${listaDeCompras}`)

// Você está criando um sistema para controlar os gastos mensais da sua casa. Os valores das despesas estão em um array, e você precisa somar todos esses valores para saber o total gasto no mês.
// Escreva um programa que:
// Crie um array com os valores das despesas.
// Use um loop for para somar os valores.
// Exiba o total gasto.
const despesas = [120, 80, 45.5, 200, 60]
let soma = 0

for (let i = 0; i < despesas.length; i++) {
    soma += despesas[i]
}
console.log(soma)

// Você está criando um painel para um sistema de chamada escolar. Você recebeu uma lista com os nomes das pessoas estudantes de uma turma e precisa exibir um por um para fazer a chamada em sala. Escreva um programa que:
// Crie um array com os nomes das pessoas.
// Use o for...of para exibir cada nome individualmente.
const estudantes = ["Carla", "João", "Marina", "Lucas", "Beatriz"]

for (const nomes of estudantes) {
    console.log(`Estudantes: ${nomes}`)
}

// Você recebeu a missão de desenvolver um sistema de envio de notificações. A cada nova mensagem cadastrada, o sistema deve exibir uma notificação no console informando que a mensagem foi enviada. Escreva um programa que:
// Crie um array com uma lista de mensagens.
// Use o método forEach() para exibir uma mensagem no console para cada item da lista.
const mensagens = ["Pedido confirmado", "Pagamento aprovado", "Produto enviado"]

mensagens.forEach(msg => {
    console.log(`Notificação: ${msg[0]}`)
})

// Você está desenvolvendo um sistema de tarefas do dia a dia. O sistema deve permitir que a pessoa usuária adicione uma nova tarefa ao final da lista e, em seguida, remova a última tarefa que foi adicionada. Escreva um programa que:
// Crie um array com três tarefas iniciais.
// Adicione uma nova tarefa no final da lista.
// Remova a última tarefa da lista.
// Exiba a lista após cada operação.
const tarefas = ["Estudar", "Lavar roupa", "Fazer compras"]
tarefas.push("Lavar louça")
console.log(tarefas)
tarefas.pop()
console.log(tarefas)

// Você está desenvolvendo um sistema de pedidos online. Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, sem modificar o array original. Escreva um programa que:
// Crie um array com alguns pedidos.
// Faça uma cópia do array.
// Adicione um novo item apenas na cópia.
// Exiba os dois arrays para mostrar que o original não foi alterado.
const pedidos = ["camiseta", "calça", "tênis"]
let copiaPedidos = pedidos.slice()
copiaPedidos.push("cueca")
console.log(`Original: ${pedidos}`)
console.log(`Cópia: ${copiaPedidos}`)

// Você está desenvolvendo um sistema de busca para uma biblioteca digital. Quando a pessoa usuária digita o nome de um livro, o sistema precisa verificar se ele está disponível na lista de títulos cadastrados. Escreva um programa que:
// Crie um array com nomes de livros.
// Crie uma variável com o nome de um livro procurado.
// Verifique se o livro está na lista.
// Exiba uma mensagem informando se o livro foi encontrado ou não.
const livros = ["Dom Casmurro", "O Cortiço", "Capitães da Areia", "Iracema"]
const livroProcurado = "O Cortiço"


if (livros.includes(livroProcurado) === true) {
    console.log("Livro encontrado")
} else {
    console.log("Livro não encontrado")
}

// Você está desenvolvendo um sistema de pagamento e todos os produtos precisam receber um desconto de 10% antes de serem exibidos para as pessoas. Escreva um programa que:
// Crie um array com os preços originais dos produtos.
// Use o método map() para aplicar 10% de desconto em cada item.
// Exiba o novo array com os preços já com o desconto aplicado.
const precos = [100, 80, 50, 120]
const desconto10 = precos.map(valor => valor * 0.90)
console.log(`Valor sem desconto: ${precos}`)
console.log(`Preços com 10% de desconto: ${desconto10}`)

// Você está desenvolvendo um sistema de controle de acesso para um evento exclusivo. Cada participante fornece seu nome e idade, mas apenas maiores de 18 anos podem entrar. Seu objetivo é exibir quem teve acesso liberado e criar uma lista final apenas com os nomes desses participantes.
// Para isso, você precisa:
// Criar um array com objetos contendo nome e idade de cada participante.
// Usar o método filter() para:
// Selecionar somente os participantes com 18 anos ou mais.
// Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
// Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
// Exibir a lista de aprovados no final.
const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
]

const maiorIdade = participantes.filter(pessoa => pessoa.idade >= 18).map(user => user.nome)

console.log(maiorIdade)

// Você está desenvolvendo um painel de vendas para a área comercial de uma empresa. O time quer uma visão clara de quais produtos venderam bem, quanto cada um arrecadou, e qual gerou mais lucro.
// Você precisa:
// Mostrar todos os produtos (nome, preço, quantidade).
// Filtrar os que venderam mais de 100 unidades e exibir seus nomes.
// Calcular os totais de venda de cada produto.
// Descobrir o mais lucrativo.
const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
]
console.log("Relatórios de produtos vendidos: ")

produtos.forEach((relatorio) => {
    console.log("Nome:", relatorio.nome + " | " + " Preço:", relatorio.preco + " | " + " Quantidade vendida:", relatorio.quantidadeVendida)
})

const relatorio = produtos.filter((produto) => {
    if (produto.quantidadeVendida > 100) {
        console.log("Produtos com alto volume de vendas (> 100 unidades):", produto.nome)
    }
})

const totalVendas = produtos.map((total) => {
    return {
        nome: total.nome,
        total: total.preco * total.quantidadeVendida
    }
})

console.log("Total de vendas por produto:")
totalVendas.forEach((produto) => {
    console.log(`${produto.nome}: R$ ${produto.total}`)
})

const maisLucrativo = totalVendas.reduce((maior, produto) => {
    if (produto.total > maior.total) {
        return produto
    }
    return maior
})

console.log("Produto mais lucrativo:", maisLucrativo.nome, "R$", maisLucrativo.total)