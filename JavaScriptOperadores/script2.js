let HT; // horas trabalhadas
let VH; // valor hora
let PD; // percentual de desconto
let TD; // total de desconto
let SB; // salario bruto
let SL; // slario liquido

HT = prompt('Digite as Horas Trabalhadas:', 'Informe aqui.');
VH = prompt('Entre com o valor da hora:', 'Informe aqui.');
PD = prompt('Informe o Percentual de desconto:', 'em PORCENTAGEM');
SN = parseFloat(HT) * parseFloat(VH);
TD = parseFloat(PD) * SB / 100;
SL = SB - TD;