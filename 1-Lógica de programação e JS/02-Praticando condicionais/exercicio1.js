// IF/ELSE
// definir um fluxo para somar ou multiplicar dois números usando if/else

num1 = 2
num2 = 5
let operacao = "subtração"

if (operacao === "somar") {
    console.log(`Soma: ${num1 + num2}`)
} else if (operacao === "multiplicar") {
    console.log(`Multiplicação: ${num1 * num2}`)
} else {
    console.log(`Operação inválida`)
}

// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

let salarioAtual = 5742.65

if (salarioAtual >= 11000) {
    console.log("3% de bônus")
} else if (salarioAtual >= 7000 && salarioAtual <= 10999) {
    console.log("5% de bônus")
} else if (salarioAtual <= 6999 && salarioAtual >= 4008) {
    console.log("7% de bônus")
} else if (salarioAtual <= 3999) {
    console.log("9% de bônus")
} else {
    console.log("Opção inválida")
}

// Verificar se um ano é bissexto. Um ano é bissexto quando:
// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

let anoAtual = 2000

if (anoAtual % 4 === 0 && anoAtual % 100 !== 0 || anoAtual % 400 === 0) {
    console.log(`${anoAtual} é bissexto`)
} else {
    console.log(`${anoAtual} não é bissexto`)
}

// TERNARIO E SWITCH
// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 
function estudante(nota, falta) {
    return nota >= 8 && falta <= 2 ? "Recebe bônus" : "Não recebe bônus"
}

console.log(estudante(8, 2))

// criar um fluxo que identifica o tipo de usuário e comunica de acordo.
// ex: usuário free tem acesso limitado ao app
// ex: usuário premium tem acesso a todas as funções
// ex: usuário super premium tem acesso total e bônus especiais
const usuario = "free"

switch (usuario) {
    case "free":
        console.log("acesso limitado ao app")
        break;
    case "premium":
        console.log("acesso a todas as funções")
        break;
    case "super":
        console.log("acesso total e bônus")
        break;
    default:
        console.log("opção inválida")
        break;
}

// Você está desenvolvendo um sistema de controle de acesso para um evento. Para entrar, a pessoa precisa ter 18 anos ou mais.
// Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido.
const idade = 77
const liberaEntrada = idade >= 18 ? "Acesso permitido" : "Acesso negado"
console.log(liberaEntrada)

// Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:
// Menor que 15: "Frio"
// De 15 a 25: "Agradável"
// Acima de 25: "Quente"
// Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.
const temp = "Frio"
if (temp < 15) {
    console.log("Frio")
} else if (temp >= 15 && temp <= 25) {
    console.log("Agradável")
} else if (temp > 25) {
    console.log("Quente")
} else {
    console.log(`${temp} não é válido`)
}

// Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:
// Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
// Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
// Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".
// Crie um programa que, dado o valor da idade, classifique a pessoa na categoria correspondente.
const aluno = "idade 18"

if (aluno < 12) {
    console.log("Infantil")
} else if (aluno >= 12 && aluno < 18) {
    console.log("Juvenil")
} else if (aluno >= 18) {
    console.log("Adulto")
} else {
    console.log("idade inválida")
}

// Você está desenvolvendo um sistema para controlar o horário de funcionamento de uma loja. Durante a semana, a loja abre das 9h às 18h, mas aos sábados e domingos, ela abre em horário especial, das 10h às 14h.
// Crie um programa que, dado o dia da semana em formato numérico:
// 0: Domingo
// 1: Segunda-feira
// 2: Terça-feira
// 3: Quarta-feira
// 4: Quinta-feira
// 5: Sexta-feira
// 6: Sábado
// Verifique se a loja está aberta e qual o horário de funcionamento.
// Se for sábado (6) ou domingo (0), a loja estará aberta em horário especial.
// Nos outros dias, a loja estará aberta no horário normal.
const diaSemana = 5
switch (diaSemana) {
    case 0:
        console.log("A loja está aberta em horário especial: 10h às 14h.")
        break;
    case 1:
        console.log("A loja está aberta no horário normal: 9h às 18h.")
        break;
    case 2:
        console.log("A loja está aberta no horário normal: 9h às 18h.")
        break;
    case 3:
        console.log("A loja está aberta no horário normal: 9h às 18h.")
        break;
    case 4:
        console.log("A loja está aberta no horário normal: 9h às 18h.")
        break;
    case 5:
        console.log("A loja está aberta no horário normal: 9h às 18h.")
        break;
    case 6:
        console.log("A loja está aberta em horário especial: 10h às 14h.")
        break;
    default:
        console.log("Opção inválida")
        break;
}

// Você está criando um sistema de autenticação de usuários para um site. O sistema deve verificar se o usuário digitado é "admin". Se o usuário for "admin", o login será bem-sucedido e será exibida a mensagem "Login bem-sucedido!". Caso contrário, o sistema deve exibir "Usuário inválido."
// Crie um programa utilizando o operador ternário que realize essa verificação e exiba a mensagem correspondente.
const user = "administrador"
const verificaLogin = user === "admin" ? "Login bem-sucedido!" : "Usuário inválido"
console.log(verificaLogin)

// Você está desenvolvendo um sistema para verificação de compatibilidade de frutas em um processo de preparo de sucos. O sistema precisa verificar se o tipo de fruta informado é compatível com o tipo esperado, de acordo com uma receita.
// O suco pode ser feito somente com "laranja" ou "abacaxi".
// Qualquer outra fruta que não seja "laranja" ou "abacaxi" deve gerar uma mensagem de erro, informando que a fruta não é compatível.
// Crie um programa que, dado o nome da fruta, verifique se ela é compatível com a receita.
const fruta = "laranja"
if (fruta === "laranja" || fruta === "abacaxi") {
    console.log("Fruta compatível para a receita.")
} else {
    console.log("Fruta incompatível para a receita.")
}

// Imagine que você está desenvolvendo um site de compras. A pessoa só pode finalizar a compra se o carrinho não estiver vazio.
// Crie um programa que, com base na variável carrinhoVazio (booleana), verifique se a compra pode ser finalizada. Se o carrinho não estiver vazio, mostre: "Compra finalizada com sucesso!". Caso contrário, exiba: "Não é possível finalizar a compra: carrinho vazio."
const carrinhoVazio = true
if (carrinhoVazio === true) {
    console.log("Compra finalizada com sucesso!")
} else {
    console.log("Não é possível finalizar a compra: carrinho vazio.")
}

// Você está criando um sistema de verificação de status de pagamento de clientes. Dependendo do status, o sistema deve exibir uma mensagem apropriada:
// Se o status for "pendente", exibe: "Pagamento pendente".
// Se o status for "aprovado", exibe: "Pagamento aprovado".
// Se o status for "recusado", exibe: "Pagamento recusado".
// Use o switch/case para criar um programa que faça essa verificação e mostre a mensagem correspondente ao status do pagamento.
const condicao = "fiado"
switch (condicao) {
    case "pendente":
        console.log("Pagamento pendente")
        break;
    case "aprovado":
        console.log("Pagamento aprovado")
        break;
    case "recusado":
        console.log("Pagamento recusado")
        break;
    default:
        console.log("opção inválida")
        break;
}

// Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para conseguir avançar para o próximo nível:
// O personagem precisa ter mais de 50 pontos.
// O personagem deve ter pelo menos uma vida restante.
// Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.
function personagem(pontos, vida) {
    if (pontos > 50 && vida >= 1) {
        return "Pode avançar para o próximo nível"
    } else {
        return "Não pode avançar para o próximo nível"
    }
}

console.log(personagem(40, 1))

// Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga. O sistema deve classificar a bateria nas seguintes categorias:
// "Crítica": se a bateria estiver abaixo de 20%
// "Moderada": se estiver entre 20% e 80%
// "Cheia": se estiver acima de 80%
// Utilize o operador ternário para definir e exibir a categoria da bateria com base no valor da variável bateria.
const bateria = 90;

const statusBateria = (bateria < 20)
    ? "Crítica"
    : (bateria <= 80)
        ? "Moderada"
        : "Cheia";

console.log(statusBateria);