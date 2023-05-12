function DiaSemana() {
    var Hoje = new Date(document.getElementById('data').value);
    var Dia = Hoje.getDay();
    var Semana = new Array(6);

    Semana[0] = 'Domingo';
    Semana[1] = 'Segunda-';
    Semana[2] = 'Terça';
    Semana[3] = 'Quarta-';
    Semana[4] = 'Quinta-';
    Semana[5] = 'Sexta-';
    Semana[6] = 'Sábado';

    document.write(Semana[Dia]);
    document.write('<br>', Hoje)
}
function ColorirNome() {
    var Cor = new Array('Black', 'Magenta', 'Green', 'Blue', 'Red', 'Yellow', 'Silver');
    var Nome = document.getElementById('pNome').value;

    for (let i = 0; i < Cor.length; i++) {
        document.write(Nome.fontcolor(Cor[i]) = '<br>');

    }
}