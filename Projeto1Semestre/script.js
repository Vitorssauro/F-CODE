function Cadastrar() {

    let Nome = document.getElementById('MyCad').pnome.value;
    let Mail = document.getElementById('MyCad').pmail.value;
    let ConMail = document.getElementById('MyCad').pconmail.value;
    let Senha = document.getElementById('MyCad').psenha.value;
    let ConSenha = document.getElementById('MyCad').pconsenha.value;

    if (Nome == "") {
        alert("Insira seu Nome.");
    } else
        if (Mail == "") {
            alert("Insira seu E-Mail.");
        } else
            if (ConMail == "") {
                alert("Confirme seu E-mail.");
            } else
                if (Mail != ConMail) {
                    alert("E-mails diferentes! Informe novamente.");
                } else
                    if (Senha == "") {
                        alert("Insira sua Senha.");
                    } else
                        if (ConSenha == "") {
                            alert("Confrime sua Senha.");
                        } else
                            if (Senha != ConSenha) {
                                alert("Senhas diferentes! Informe novamente.");
                            } else {
                                alert("Cadastro feito com Sucesso!!")
                            }
}
