const input1 = document.getElementById('input-1')
const input2 = document.getElementById('input-2')

const sumar = document.getElementById('sumar')
const restar = document.getElementById('restar')
const multiplicar = document.getElementById('multiplicar')
const dividir = document.getElementById('dividir')


const resultado = document.getElementById('resultado')

sumar.addEventListener('click', ejecutarOperacion)
restar.addEventListener('click', ejecutarOperacion)
multiplicar.addEventListener('click', ejecutarOperacion)
dividir.addEventListener('click', ejecutarOperacion)

//Escribir un proxy que contenga el acceso a las propiedades de un objeto que contenga la informacion de 
//una operacion  matematica

function calcularResultado() {
    let total
    switch (operador) {
        case '+':
            total = valor1 + valor2
            break;
        case '*':
            total = valor1 * valor2
            break;

        case '-':
            total = valor1 - valor2
            break;

        case '/':
            total = valor1 / valor2
            break;
        default:
            break;
    }

    resultado.innerText = total
}


function ejecutarOperacion(evento){
    calcularResultado()
}