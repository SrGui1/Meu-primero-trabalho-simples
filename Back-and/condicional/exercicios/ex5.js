//Voto obrigatório: 18 a 70 anos Voto facultativo: 16-17 anos OU maior que 70 anos Não pode votar: menor de 16 anos

let idade = 17

if(idade >= 18 && idade <= 70){

    console.log("Você é obrigado a votar! ")

}else if(idade >= 16 || idade >= 70){

    console.log("Você pode votar em branco")

}else{
    console.log("Você não pode votar! ")


}