confirmarCadastro = () => {
    const usuario = document.querySelector("input[name=usuario").value;
    const senha = document.querySelector("input[name=senha").value;
    const confirmarSenha = document.querySelector("input[name=confirmarSenha").value;

    if(!validaUsuario(usuario)){
        return false;
    }
    if(!validaSenhas(senha, confirmarSenha)){
        console.log("não aceito o cadastro!");
        return false;
    }

    const novoUsuario = {
        "nomeUsu": usuario,
        "senhaUsu": senha,
        "confirmaSenhaUsu": confirmarSenha
    };

    gravarDados(novoUsuario)

    setTimeout(() => {
        document.getElementById("formulario").submit();
    }, 2000);
}

validaUsuario = (usuario) => {
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    let erroUsuario = document.querySelector(".erro-usuario");
    let resposta = true;

    if(!usuario){
        erroUsuario.innerHTML = "Nome de usuário não preenchido!";
        return false;
    }       

    if(usuario.length < 5) {
        erroUsuario.innerHTML = "Usuário deve ter no mínimo de 5 caracteres";
        return false;
    }

    erroUsuario.innerHTML = "";

    if(listaUsuarios != null){
        listaUsuarios.forEach(usuarioSalvo => {
            if(usuarioSalvo.nomeUsu == usuario){
                erroUsuario.innerHTML = "Nome de usuário já em uso!";
                resposta = false;
                return;
            }
        });
    }
    return resposta;
}

validaSenhas = (senha, confirmarSenha) => {
    let erroSenha = document.querySelector(".erro-senha");
    let erroConfirmaSenha = document.querySelector(".erro-confirma-senha");

    if(senha.length < 6){
        erroSenha.innerHTML = "Minimo de 6 caracteres";
        return false;
    } 
    if(senha !== confirmarSenha){
        erroConfirmaSenha.innerHTML = "As senhas não são iguais!"
        return false;
    }

    erroSenha.innerHTML = "";
    erroConfirmaSenha.innerHTML = "";
    return true;
}

gravarDados = (novoUsuario) => {
    if(localStorage.getItem("usuarios") == null){
        localStorage.setItem("usuarios", "[]");
    }

    const listaAnterior = JSON.parse(localStorage.getItem("usuarios"));
    listaAnterior.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(listaAnterior));

    mastraSnackbar();
}

mastraSnackbar = () => {
  var snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  setTimeout( () => { 
      snackbar.className = snackbar.className.replace("show", ""); 
    }, 3000);
}