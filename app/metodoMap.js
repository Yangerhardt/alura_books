function aplicarDesconto(livros) {
  let desconto = 0.3
  let livrosComDesconto = livros.map(livro => {
    return {...livro, preco: livro.preco - (livro.preco * desconto)}
  })
  return livrosComDesconto
}