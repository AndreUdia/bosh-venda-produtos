var lista = [
    {
        "id": 0,
        "titulo": "FURADEIRA",
        "imagem": "furadeira.jpg",
        "status": false,
        "estoque": 18,
        "preco": 350.00,
        "descricao": `• Furadeira de Impacto GSB,</br>
                      • manual de instruções,</br>
                      • Chave de mandril, </br> 
                      • Empunhadeira auxiliar`
    },
    {
        "id": 1,
        "titulo": "BATERIA",
        "imagem": "bateria.jpg",
        "status": false,
        "estoque": 5,
        "preco": 70.00,
        "descricao": `• Aplicação: HD</br>
                    • Capacidade de bateria: 2Ah</br>
                    • Tecnologia de elementos: Li-ion</br>
                    • Tensão: 18V</br>
                    • Tipo de Construção: Ions de Lítio</br>`
    },
    {
        "id": 3,
        "titulo": "SERRA-CIRCULAR",
        "imagem": "serra-circular.jpg",
        "status": false,
        "estoque": 10,
        "preco": 650.00,
        "descricao": `• Alimentação:	Dísponível em 110V ou 220V</br>
                    • Marca:	Bosch</br>
                    • Ferramenta:	Serra Circular</br>
                    • Garantia:	1 Ano`
    },
    {
        "id": 4,
        "titulo": "MALETA PROFISSIONAL",
        "imagem": "maleta.jpg",
        "status": true,
        "estoque": 0,
        "preco": 200.00,
        "descricao": `• Super-resistentes: corpo em plástico</br>
                    • A alça da frente é maior para transporte individual</br>
                    • Travas mais robustas: abrem e fecham com muita facilidade</br>
                    • Bloqueáveis: podem utilizar cadeado para maior segurança`
    }
];

carregarListaPersistindo = () =>{
    localStorage.setItem("items", JSON.stringify(lista));
}

carregarListaPersistindo();

montarCard = () => {
    //var listaStorage = JSON.parse("items");
    lista.forEach(item => {
        let conteudo = "";
        let statusProduto = "";

        if(item.status == false){
            statusProduto = `<div class="card-comprar" onclick='comprar(${item.id})')>
                                Comprar
                            </div> `;
        } else{
            statusProduto = `<div class="card-comprar card-comprado">
                                Sem Estoque
                            </div> `;
        }

        conteudo += `<div class="card">
                        <div class="card-img">
                            <img src="../res/img/${item.imagem}"/>
                        </div>
                        <div class="card-descricao">
                            ${item.titulo}
                        </div>
                        ${statusProduto}  
                        <p> R$${item.preco} </p>
                        <p class='desc-prod'> ${item.descricao} </p>
                    </div>`;

        document.querySelector("#divProdutos").innerHTML += conteudo;
    });
}

carregarSaudacao = () => {
    const nomeUsuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    document.querySelector(".msg-saudacao").innerHTML += `Bem Vindo ${nomeUsuario}`;
}

comprar = (itemId) => {
    let quantidade = 1;
    let totalCarrinho = 1;
    if(localStorage.getItem("carrinho") == null){
        localStorage.setItem("carrinho", "[]");
    }
    const carrinhoAntigo = JSON.parse(localStorage.getItem("carrinho"));

    carrinhoAntigo.forEach(item => {
        totalCarrinho += parseInt(item.qtde);
        if (item.id == itemId){
            quantidade = parseInt(item.qtde) + 1;
            carrinhoAntigo.splice(carrinhoAntigo.indexOf(item.id), 1);
        }
    })

    let item = {id: itemId, qtde: quantidade};
    carrinhoAntigo.push(item);

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAntigo));

    document.querySelector(".menu span").innerHTML = quantidade; // encontrei um pequeno bug , debugar
    mastraSnackbar();
};

sair = () => {
    // voltar à pagina de logins
    console.log("usuario deslogou do sistema");
}

mastraSnackbar = () => {
  var snackbar = document.getElementById("snackbar");
  snackbar.className = "show";
  setTimeout( () => { 
      snackbar.className = snackbar.className.replace("show", ""); 
    }, 3000);
}

carregarSaudacao();
montarCard();

