let res = document.getElementById("res");
let cont = 0;

function limpar() {
    res.value = "";
    cont = 0;
}

function parenteses() {
    if(cont % 2 == 0) {
        res.value = res.value + "(";
    } else {
        res.value = res.value + ")"
    }
    cont++;
}

function percent() {
    res.value = res.value / 100;
}

function soma() {
    res.value = res.value + "+";
}

function one() {
    res.value = res.value + 1;
}

function two() {
    res.value = res.value + 2;
}

function three() {
    res.value = res.value + 3;
}

function subtracao() {
    res.value = res.value + "-";
}

function four() {
    res.value = res.value + 4;
}

function five() {
    res.value = res.value + 5;
}

function six() {
    res.value = res.value + 6;
}

function multiplicacao() {
    res.value = res.value + "*";
}

function seven() {
    res.value = res.value + 7;
}

function eight() {
    res.value = res.value + 8;
}

function nine() {
    res.value = res.value + 9;
}

function divisao() {
    res.value = res.value + "/";
}

function remove() {
    res.value = res.value.slice(0,-1);
}

function zero() {
    res.value = res.value + 0;
}

function point() {
    res.value = res.value + ".";
}

function equals() {
    let resultado = eval(res.value.toString());
    res.value = resultado;
}