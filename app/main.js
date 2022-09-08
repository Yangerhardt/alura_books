let livros = []
let endPointAPI = 'teste-requisicao.txt'
buscarLivrosAPI()

async function buscarLivrosAPI() {
  const res = await fetch(endPointAPI) //sem o AWAIT  função não funciona
  livros = await res.json() //sem o AWAIT ele retornará somente a Promise
  let livrosComDesconto = aplicarDesconto(livros)
  
  exibirLivrosNaTela(livrosComDesconto) // nessa linha controlamos a exibição dos livros com o preço normal, ou com desconto
}


