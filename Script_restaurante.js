const listaDeProduto = []

function cadastroProduto(){

    console.log("==== Produtos Cadastrado ====")

    const idNovoBolo = listaDeProduto.length + 1
    const produto = prompt("Que tipo de bolo você está com vontade de comer?")
    alert(`Iremos entregar o "${produto}" daqui 30 minutos! `)

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
        alert(`O produto encontrado é: ${encontrado[0].nome} id: ${encontrado[0].id}`)
    }

    console.log(listaDeProduto)
}
function excluirTodosProdutos(){
   
    console.clear(listaDeProduto)
    alert("Todo o historico apagado!")
}

function excluirProdutoporID(){

        listaDeProduto.pop()

}