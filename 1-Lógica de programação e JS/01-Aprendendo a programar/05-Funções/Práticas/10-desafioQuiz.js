// Crie uma função fazerPergunta(pergunta, respostaCorreta). A função deve exibir a pergunta e depois mostrar se a resposta está certa ou errada (simule a resposta com uma variável).

function fazerPergunta(pergunta, respostaCorreta) {
    if (respostaCorreta === "cavalaria") {
        console.log("Correto")
    } else {
        console.log("Errado")
    }
}

fazerPergunta("Qual é o coletivo de cavalo", "cavalaria")