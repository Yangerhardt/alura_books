let livros = []
let endPointAPI = 'teste-requisicao.txt'
buscarLivrosAPI()

async function buscarLivrosAPI() {
  const res = await fetch(endPointAPI) //sem o AWAIT  função não funciona
  livros = await res.json() //sem o AWAIT ele retornará somente a Promise
  console.table(livros)
  let livrosComDesconto = aplicarDesconto(livros)
  exibirLivrosNaTela(livrosComDesconto)
}


