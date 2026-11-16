// Crie um array com 5 tarefas (strings). Use filter para mostrar apenas as tarefas que ainda não foram marcadas como concluídas (use uma convenção como "[x]" para concluídas).
const tarefas = ["[X] criar", "[X] ler", "[X] atualizar", "[ ] deletar", "[ ] coisar"]

const tarefasFeitas = tarefas.filter((tarefa) => {
    return tarefa.startsWith("[ ]")
})

console.log(`Tarefas feitas: ${tarefasFeitas}`)
