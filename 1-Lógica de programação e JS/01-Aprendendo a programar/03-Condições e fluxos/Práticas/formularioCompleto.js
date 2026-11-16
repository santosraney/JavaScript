// Crie três variáveis: nome, email e idade. Mostre "Formulário enviado com sucesso" apenas se todos os campos estiverem preenchidos e a idade for maior que 0.
const nome = "Raney Santos"
const email = "raneysantos12@gmail.com"
const idade = 0

if (nome != "" && email != "" && idade > 0) {
    console.log("Formulário enviado com sucesso")
} else {
    console.log("Preencher campos obrigatórios")
}