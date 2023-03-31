let inputQtde = document.querySelector("#qtde")
let inputbacon = document.querySelector("#bacon")
let inputovo = document.querySelector("#ovo")
let inputalface = document.querySelector("#alface")
let inputtomate = document.querySelector("#tomate")
let inputrefrigerante = document.querySelector("#refrigerante")
let inputbatata = document.querySelector("#batata")
let inputDelivery = document.querySelector("#delivery-sim")
let inputDeliveryNao = document.querySelector("#delivery-nao")



inputQtde.addEventListener("change", atualizarPreco)
inputbacon.addEventListener("change", atualizarPreco)
inputovo.addEventListener("change", atualizarPreco)
inputalface.addEventListener("change", atualizarPreco)
inputtomate.addEventListener("change", atualizarPreco)
inputrefrigerante.addEventListener("change", atualizarPreco)
inputbatata.addEventListener("change", atualizarPreco)
inputDelivery.addEventListener("change", atualizarPreco)
inputDeliveryNao.addEventListener("change", atualizarPreco)


function atualizarPreco() {
    let preco = inputQtde.value * 32
    let bacon = inputbacon.checked
    let ovo = inputovo.checked
    let alface = inputalface.checked
    let tomate = inputtomate.checked
    let refrigerante = inputrefrigerante.checked
    let batata = inputbatata.checked
    let delivery = inputDelivery.checked


    if (bacon) preco += 5
    if (ovo) preco += 2
    if (alface) preco += 2
    if (tomate) preco += 2
    if (refrigerante) preco += 10
    if (batata) preco += 15
    if (delivery) preco += 30
    document.querySelector("#preco").innerHTML = "R$ " + preco.toFixed(2)
}
console.log(qtde)