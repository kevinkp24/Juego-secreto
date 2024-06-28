let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function agregarTextoElementos(elemento,texto){
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales(){
    agregarTextoElementos('h1','Juego del número secreto');
    agregarTextoElementos('p',`Escoja un número del 1 al ${numeroMaximo}!`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function varificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario == numeroSecreto){
        agregarTextoElementos('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroSecreto){
            agregarTextoElementos('p','El número secreto es menor');
        }else{
            agregarTextoElementos('p','El número secreto es mayor');
        }
        intentos++;
        limpiarNumeroUsuario();
    }
    return;
}

function reiniciarJuego(){

    limpiarNumeroUsuario();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function limpiarNumeroUsuario(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosSorteados.length == numeroMaximo){
        agregarTextoElementos('p','Se han generado todos los números posibles');
    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

condicionesIniciales();