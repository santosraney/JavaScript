// Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".

function executaAcao(acao){
    acao()
}

executaAcao(function() {
    console.log("Executando ação")
})