let res = document.getElementById("res");
let cont = 0;
let tela = false;

function limpar() {
    res.value = "";
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
    cont++;
}

function percent() {
    tela = true;
    res.value = res.value / 100;
}

function soma() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + "+";
}

function one() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 1;
}

function two() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 2;
}

function three() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 3;
}

function subtracao() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + "-";
}

function four() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 4;
}

function five() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 5;
}

function six() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 6;
}

function multiplicacao() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + "*";
}

function seven() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 7;
}

function eight() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 8;
}

function nine() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 9;
}

function divisao() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + "/";
}

function remove() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value.slice(0,-1);
}

function zero() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + 0;
}

function point() {
    if(tela == true){
        limpar();
    }
    tela = false;
    res.value = res.value + ".";
}

function equals() {
    let resultado = eval(res.value.toString());
    res.value = resultado;
    cont = 0;
    tela = true;
}

