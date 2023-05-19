function MostrarNome() {
    let Nome = document.getElementById('MeuForm').pnome.value;
    let Sobrenome = document.getElementById('MeuForm').psobre.value;
    let NomeCompleto = Nome + ' ' + Sobrenome;
    alert(' Olá ' + NomeCompleto);
}

function Mais() {
    let Numero1 = document.getElementById('MyCalc').pnum1.value;
    let Numero2 = document.getElementById('MyCalc').pnum2.value;
    if (Numero1 == "" || Numero2 == "") {
        alert("Por Favor, preencha todos os campos!");
    } else {
        let Resultado = parseInt(Numero1) + parseInt(Numero2);
        alert(' O Resulado da Soma é ' + Resultado);
    }
}

function Menos() {
    let Numero1 = document.getElementById('MyCalc').pnum1.value;
    let Numero2 = document.getElementById('MyCalc').pnum2.value;
    if (Numero1 == "" || Numero2 == "") {
        alert("Por Favor, preencha todos os campos!");
    } else {
        let Resultado = parseInt(Numero1) - parseInt(Numero2);
        alert(' O Resulado da Subtração é ' + Resultado);
    }
}

function Vezes() {
    let Numero1 = document.getElementById('MyCalc').pnum1.value;
    let Numero2 = document.getElementById('MyCalc').pnum2.value;
    if (Numero1 == "" || Numero2 == "") {
        alert("Por Favor, preencha todos os campos!");
    } else {
        let Resultado = parseInt(Numero1) * parseInt(Numero2);
        alert(' O Resulado da Multipilicação é ' + Resultado);
    }
}

function Divide() {
    let Numero1 = document.getElementById('MyCalc').pnum1.value;
    let Numero2 = document.getElementById('MyCalc').pnum2.value;
    if (Numero1 == "" || Numero2 == "") {
        alert("Por Favor, preencha todos os campos!");
    } else {
        if (Numero2 == 0) {
            alert("Não é Possível dividir por ZERO!!");
        } else {
            let Resultado = parseInt(Numero1) / parseInt(Numero2);
            alert(' O Resulado da Divisão é ' + Resultado);
        }
    }
}