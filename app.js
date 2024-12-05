//Variable que almacena el retorno de la función que da el número secreto aleatorio
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log(numeroSecreto);

//Función Genérica para modificar los elementos HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

//Funcíon que guarda el número que digita el usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número, en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else
    //El usuario no acertó    
    {
        numeroDeUsuario > numeroSecreto ? asignarTextoElemento('p', 'El número secreto es menor') : asignarTextoElemento('p', 'El número secreto es mayor');
    }

    intentos++;
    limpiarCaja();

    return;
}


function limpiarCaja() {

    document.querySelector('#valorUsuario').value = '';


}




//Función que genera el número aleatorio
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    }
    else {

        //Si el numero generado se encuentra en la lista se realiza una operación sino otra.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {

    //Llamamos la función Genérica para modificar los elementos HTML.
    //En este caso, los elementos modificados son: h1 y p.
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();

    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Desabilitar el boton de nuevo juego
    condicionesIniciales();

    //Inicializar el numero de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');



}

//Llamamos la función Genérica para modificar los elementos HTML.
//En este caso, los elementos modificados son: h1 y p.
condicionesIniciales();
