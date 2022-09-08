function calcularValorTotalLivrosDisponiveis(lirvos) {
  return lirvos.reduce((anterior, livro) => anterior + livro.preco, 0).toFixed(2)
}