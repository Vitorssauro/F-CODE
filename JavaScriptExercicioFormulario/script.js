function Cadastrar() {

    let Nome = document.getElementById('MyForm').pnome.value;
    let Endereco = document.getElementById('MyForm').pdereco.value;
    let Mail = document.getElementById('MyForm').pmail.value;
    let ConMail = document.getElementById('MyForm').pconmail.value;
    let Senha = document.getElementById('MyForm').psenha.value;
    let ConSenha = document.getElementById('MyForm').pconsenha.value;

    if (Nome == "") {
        alert("Insira seu Nome.");
    } else
        if (Endereco == "") {
            alert("Insira seu Endereço.");
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