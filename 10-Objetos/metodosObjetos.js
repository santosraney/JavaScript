const pessoa = {
    nome: "Raney",
    idade: 33,
    pets: ["Bino"],
    nacionalidade: "Brasileiro"
}

for (const chave in pessoa) {
    console.log("Chave:", chave)
    console.log("Valor:", pessoa[chave])
}

