let opecacao;
let numero1, numero2;

opecacao = prompt("Digite a operação desejada","+,-,*,/")
numero1 = prompt("Digite um Nº")
numero2 = prompt("Digite outro Nº")
switch (opecacao) {
    case ("+"): document.write(parseInt(numero1) + parseInt(numero2));
        break;
    case ("-"): document.write(parseInt(numero1) - parseInt(numero2));
        break;
    case ("*"): document.write(parseInt(numero1) * parseInt(numero2));
        break;
    case ("/"):
        if (numero2 == 0) {
            document.write("Não Dividirás por Zero");
        } else {
            document.write(parseInt(numero1) / parseInt(numero2));
        }
        break;
    default: document.write("Escolha uma operação válida!!");
}