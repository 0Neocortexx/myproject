function esconderLogin() {
    document.getElementById("box-login").style.display="None";
    document.getElementById("box-cadastro").style.display="None";
}

function abrirLogin() {
    document.getElementById("box-cadastro").style.display="None";
    document.getElementById("box-login").style.display="initial";
}

function abrirCadastro() {
    document.getElementById("box-login").style.display="None";
    document.getElementById("box").style.display="None";
    document.getElementById("box-cadastro").style.display="initial";
}