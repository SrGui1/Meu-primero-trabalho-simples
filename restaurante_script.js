let listaDeProduto = []

function cadastroProduto(){

    console.log("==== Produtos Cadastrado ====")

    const idNovoBolo = listaDeProduto.length + 1
    const produto = prompt("Dos bolos do cardapio qual você mais quer comer?")
    const saborBolo = prompt(`Qual sabor você quer que o ${produto} tenha!`)

    listaDeProduto.push(
        {
            id:idNovoBolo, nome:produto, sabor:saborBolo
        }
    )

    console.log(produto)

    if(produto.length = 0 || saborBolo.length == 0){
        alert("Escreva algo no console!")
    }else{
        alert(`O seu pedido é ${produto} sabor ${saborBolo}!`) 
    }
}
function consultarProdutos(){
    console.log("==== HISTORICO DE COMPRA ====")

    const buscarPorID = prompt(`Qual o id ou nome do bolo?`)
    const encontrado = listaDeProduto.filter(item => item.id == buscarPorID || item.nome === buscarPorID || item.sabor === buscarPorID)

    if(encontrado.length === 0 || listaDeProduto.length == 0){
        alert("Nenhum produto encontrado com essa id!")
    }else{
        alert(`O ID do produto é : ${encontrado[0].id} 
            sabor: ${encontrado[0].sabor}
            produto encontrado é: ${encontrado[0].nome}`)  
        }
}
    console.log(listaDeProduto)

function excluirTodosProdutos(){
   
   listaDeProduto = []
    console.log("seu historico foi apagado!")
    alert("Todo o historico apagado!")
}

function excluirProdutoporID(){

    const idDigitado = prompt("Qual o ID do pedido que você quer remover?")
    const posicao = listaDeProduto.findIndex(item => item.id == idDigitado)

    if(posicao === -1){
        alert("Nenhum pedido encontrado com esse ID!")
    }else{
        const removido = listaDeProduto.splice(posicao, 1)
        alert(`Pedido removido: ${removido[0].nome} sabor ${removido[0].sabor}`)
    }
}
function excluirUltimoProduto(){
    listaDeProduto.pop()
}
