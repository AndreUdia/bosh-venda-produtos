validarFormulario = () => {
    const usuario = document.querySelector("input[name=usuario]").value; 
    const senha = document.querySelector("input[name=senha]").value;

    if(!validaUsuarioSenha(usuario, senha)){
        document.querySelector("form>p").innerHTML = "Usuário e senha inválidos!"
        return false;
    } else{
        document.getElementById("formulario").submit();
    }
}

validaUsuarioSenha = (usuario, senha) => {
    let usuarioValidado = false;
    const listaAnterior = JSON.parse(localStorage.getItem("usuarios"));

    if(listaAnterior != null){
        listaAnterior.forEach(usuarioSalvo => {
            if(
                usuarioSalvo.nomeUsu == usuario &&
                usuarioSalvo.senhaUsu == senha
            ){
                usuarioValidado = true;
            }
        });
    }
    
    return usuarioValidado;
}