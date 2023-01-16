let insert = (num) => {
let numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + num
}

let clean = () => {
document.getElementById('resultado').innerHTML = '';
}

let back = () => {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)

}

let calcular = () => {
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        document.getElementById('resultado').innerHTML = 'Sem calculo'
    }
}