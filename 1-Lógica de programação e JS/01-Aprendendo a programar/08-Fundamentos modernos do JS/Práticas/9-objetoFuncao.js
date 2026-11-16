// Crie uma função construtora chamada Livro que receba titulo e autor como parâmetros e os armazene em propriedades do objeto.
// Em seguida, crie dois objetos Livro usando essa função.

// Adicione à função construtora Livro uma função chamada descrever, que retorna uma frase com o título e o autor do livro, usando concatenação de strings.
function Livro(titulo, autor) {
    this.titulo = titulo
    this.autor = autor
    
    this.descrever = function() {
        return `O livro ${this.titulo} foi escrito por ${this.autor}`
    }
}

const livro1 = new Livro("Dom Casmurro", "Machado de Assis")

const livro2 = new Livro("O Hobbit", "J.R.R. Tolkien")

console.log(livro1, livro2)

console.log(livro1.descrever())