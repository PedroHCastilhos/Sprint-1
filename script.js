let res = document.getElementById("res");
let visor = document.getElementById("visor");
let cont = 0;
let tela = false;

function limpar() {
    res.value = "";
    visor.value = res.value
    cont = 0;
    tela = false;
}

function parenteses() {
    if(tela == true){
        limpar();
    }
    tela = false;
    if(cont % 2 == 0) {
        res.value = res.value + "(";
    } else {
        res.value = res.value + ")"
    }
    visor.value = res.value
    cont++;
}

function percent() {
    tela = true;
    let resultado = eval(res.value.toString());
    res.value = resultado / 100;
    visor.value = res.value
}

function soma() {
    tela = false;
    if(res.value.slice(-1) == "+" || res.value.slice(-1) == "-" || res.value.slice(-1) == "*" ||res.value.slice(-1) == "/" || res.value.slice(-1) == ".") {
        res.value += "";
    } else {
        res.value = res.value + "+";
    }
    visor.value = res.value
}

function one() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 1;
    visor.value = res.value
}

function two() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 2;
    visor.value = res.value
}

function three() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 3;
    visor.value = res.value
}

function subtracao() {
    tela = false;
    if(res.value.slice(-1) == "+" || res.value.slice(-1) == "-" || res.value.slice(-1) == "*" ||res.value.slice(-1) == "/" || res.value.slice(-1) == ".") {
        res.value += "";
    } else {
        res.value = res.value + "-";
    }
    visor.value = res.value
}

function four() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 4;
    visor.value = res.value
}

function five() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 5;
    visor.value = res.value
}

function six() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 6;
    visor.value = res.value
}

function multiplicacao() {
    tela = false;
    if(res.value.slice(-1) == "+" || res.value.slice(-1) == "-" || res.value.slice(-1) == "*" ||res.value.slice(-1) == "/" || res.value.slice(-1) == ".") {
        res.value += "";
    } else {
        res.value = res.value + "*";
    }
    visor.value = res.value
}

function seven() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 7;  
    visor.value = res.value
}

function eight() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 8;
    visor.value = res.value
}

function nine() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 9;
    visor.value = res.value
}

function divisao() {
    tela = false;
    if(res.value.slice(-1) == "+" || res.value.slice(-1) == "-" || res.value.slice(-1) == "*" ||res.value.slice(-1) == "/" || res.value.slice(-1) == ".") {
        res.value += "";
    } else {
        res.value = res.value + "/";
    }
    visor.value = res.value
}

function remove() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value.slice(0,-1);
    visor.value = res.value
}

function zero() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 0;
    visor.value = res.value
}

function point() {
    if(tela == true){
        limpar();
    }
    tela = false;
    if(res.value.slice(-1) == "+" || res.value.slice(-1) == "-" || res.value.slice(-1) == "*" ||res.value.slice(-1) == "/" || res.value.slice(-1) == ".") {
        res.value += "";
    } else {
        res.value = res.value + ".";
    }
    visor.value = res.value
}

function equals() {
    let resultado = eval(res.value.toString());
    res.value = resultado;
    cont = 0;
    tela = true;
}

