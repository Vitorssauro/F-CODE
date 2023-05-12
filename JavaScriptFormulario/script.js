function MostrarNome() {
    let Nome = document.getElementById('MeuForm').pnome.value;
    let Sobrenome = document.getElementById('MeuForm').psobre.value;
    let NomeCompleto = Nome + ' ' + Sobrenome;
    alert(' Olá ' + NomeCompleto);
}

function Soma() {
    let Numero1 = document.getElementById('MyCalc').pnum1.value;
    let Numero2 = document.getElementById('MyCalc').pnum2.value;
    let Resultado = parseInt(Numero1) + parseInt(Numero2);
    alert(' O Resulado da Soma é ' + Resultado);
}
