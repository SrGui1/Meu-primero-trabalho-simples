let listaDeProduto = []

function cadastroProduto(){

    console.log("==== Produtos Cadastrado ====")

    const idNovoBolo = listaDeProduto.length + 1
    const produto = prompt("Que tipo de bolo você está com vontade de comer?")

    listaDeProduto.push(
        {
            id:idNovoBolo, nome:produto
        }
    )
    console.log(produto)

}
function consultarProdutos(){
    console.log("==== HISTORICO DE COMPRA ====")

        alert(`No seu histórico já foi pedido ${listaDeProduto.length} bolos`)

    const buscarPorID = prompt(`Qual o id ou nome do bolo?`)
    const encontrado = listaDeProduto.filter(item => item.id == buscarPorID || item.nome === buscarPorID)

    if(encontrado.length === 0){
        alert("Nenhum produto encontrado com essa id!")
    } else {
        alert(`O ID do produto é : ${encontrado[0].id} e o produto encontrado é: ${encontrado[0].nome}`)
    }

    console.log(listaDeProduto)
}

function excluirTodosProdutos(){
   
   listaDeProduto = []
    console.log("seu historico foi apagado!")
    alert("Todo o historico apagado!")
}

function excluirProdutoporID(){

        listaDeProduto.pop()
        alert("Ultimo produto foi apagado do historico!")
}