let res = document.getElementById("res");
let visor = document.getElementById("visor");
let cont = 0;
let tela = false;
let ponto = false;

function number(number) {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + number;
    visor.value = res.value
}

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
    if(cont % 2 == 0 && res.value.slice(-1) == "+" || res.value.slice(-1) == "-" || res.value.slice(-1) == "*" || res.value.slice(-1) == "/" || res.value.slice(-1) == "") {
        res.value = res.value + "(";
    } else if(cont % 2 != 0) {
        res.value = res.value + ")"
    } else {
        res.value += "";
    }
    visor.value = res.value
    cont++;
    ponto = false;
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
    ponto = false;
}

function subtracao() {
    tela = false;
    if(res.value.slice(-1) == "+" || res.value.slice(-1) == "-" || res.value.slice(-1) == "*" ||res.value.slice(-1) == "/" || res.value.slice(-1) == ".") {
        res.value += "";
    } else {
        res.value = res.value + "-";
    }
    visor.value = res.value
    ponto = false;
}

function multiplicacao() {
    tela = false;
    if(res.value.slice(-1) == "+" || res.value.slice(-1) == "-" || res.value.slice(-1) == "*" ||res.value.slice(-1) == "/" || res.value.slice(-1) == ".") {
        res.value += "";
    } else {
        res.value = res.value + "*";
    }
    visor.value = res.value
    ponto = false;
}

function divisao() {
    tela = false;
    if(res.value.slice(-1) == "+" || res.value.slice(-1) == "-" || res.value.slice(-1) == "*" ||res.value.slice(-1) == "/" || res.value.slice(-1) == ".") {
        res.value += "";
    } else {
        res.value = res.value + "/";
    }
    visor.value = res.value
    ponto = false;
}

function remove() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value.slice(0,-1);
    visor.value = res.value
}

function point() {
    if(tela == true){
        limpar();
    }
    tela = false;
    if(res.value.slice(-1) == "+" || res.value.slice(-1) == "-" || ponto) {
        res.value += "";
    } else {
        res.value = res.value + ".";
        ponto = true;
    }
    visor.value = res.value
}

function equals() {
    let resultado = eval(res.value.toString());
    res.value = resultado;
    cont = 0;
    tela = true;
    ponto = false;
}