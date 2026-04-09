let nome = document.getElementById("nome_user")
let email = document.getElementById("email_user")
let descricao = document.getElementById("descricao_user")
const botaonome = document.getElementById("botao_nome")
const botaoemail = document.getElementById("botao_email")
const botaodescricao = document.getElementById("botao_descricao")

botaonome.addEventListener("click", function(){
    let inputnome = prompt("Digite seu nome: ")
    if (inputnome == null) {
        alert("Mudança Cancelada")
    }
    else (nome.innerHTML = inputnome)
}
)

botaoemail.addEventListener("click", function(){
    let inputemail = prompt("Digite seu email: ")
    if (inputemail == null) {
        alert("Mudança Cancelada")
    }
    else (email.innerHTML = inputemail)
}
)

botaodescricao.addEventListener("click", function(){
    let inputdescricao = prompt("Digite sua descrição: ")
    if (inputdescricao == null) {
        alert("Mudança Cancelada")
    }
    else (descricao.innerHTML = inputdescricao)
}
)