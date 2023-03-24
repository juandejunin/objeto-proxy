window.onload = () => {
    const form = document.getElementById('formulario')
    form.onsubmit = (e) => {
        e.preventDefault()
        const valor1 = document.getElementById('input-1')
        const Numero1 = valor1.value
        
        console.log(Numero1)
        const valor2 = document.getElementById('input-2')
        const Numero2 = valor2.value
        
        console.log(Numero2)

        const sumar = document.getElementById('sumar')
        const restar = document.getElementById('restar')
        const multiplicar = document.getElementById('multiplicar')
        const dividir = document.getElementById('dividir')

        console.log(sumar.innerText)

        sumar.addEventListener('click', ejecutarOperacion)
        restar.addEventListener('click', ejecutarOperacion)
        multiplicar.addEventListener('click', ejecutarOperacion)
        dividir.addEventListener('click', ejecutarOperacion)

        const resultado = document.getElementById('resultado')

        const plantilla = { valor1: null, valor2: null, operador: null }
        //los proxy incluyen un objeto que se llama  handler, los handler contienen funciones trampa que nos permiten
        //controlar el acceso a las propiedades de un objeto
        const handler = {
            get: (target, key) => {
                if (key === 'valor1') {
                    return valor1.value === '' ? 0 : parseInt(valor1.value)
                }
                if (key === 'valor2') {
                    return valor2.value === '' ? 0 : parseInt(valor2.value)
                }
                return target[key]
            }
        }

        const proxy = new Proxy(plantilla, handler)

        function calcularResultado() {
            let total
            switch (proxy.operador) {
                case '+':
                    total = proxy.valor1 + proxy.valor2
                    break;
                case '*':
                    total = proxy.valor1 * proxy.valor2
                    break;

                case '-':
                    total = proxy.valor1 - proxy.valor2
                    break;

                case '/':
                    total = proxy.valor1 / proxy.valor2
                    break;
                default:
                    break;
            }
            console.log(resultado)
            resultado.innerText = total
        }


        function ejecutarOperacion(evento) {

            proxy.operador = evento.target.innerText
            calcularResultado()
        }
    }


}





