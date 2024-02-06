var ultimoTipo = ""

function digitar(num) {
    var numero = document.getElementById('resultado').innerHTML

    if (num == '+' || num == '/' || num == '*' || num == '-') 
    {
        if (ultimoTipo == "operador") {
            return
        } 
        else {
            ultimoTipo = "operador"
        }
    } 
    else 
    {
        ultimoTipo = "numero"
    }

    document.getElementById('resultado').innerHTML = numero + num
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado)
}
}

function limparTudo() {
    document.getElementById('resultado').innerHTML = ''
}