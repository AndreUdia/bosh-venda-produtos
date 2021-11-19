var lista = [
    {
        "id": 0,
        "titulo": "furadeira personalizada",
        "imagem": "furadeira.jpg",
        "status": false
    },
    {
        "id": 1,
        "titulo": "bateria funcional",
        "imagem": "bateria.jpg",
        "status": false
    },
    {
        "id": 3,
        "titulo": "serra-circular padão",
        "imagem": "serra-circular.jpg",
        "status": false
    },
    {
        "id": 4,
        "titulo": "maleta profissional",
        "imagem": "maleta.jpg",
        "status": true
    }
];

carregarListaPersistindo = () =>{
    localStorage.setItem("items", JSON.stringify(lista));
    console.log("Carregou lista");
}

carregarListaPersistindo();

montarCard = () => {
    //var listaStorage = JSON.parse("items");
    lista.forEach(item => {
        let conteudo = "";
        let statusProduto = "";

        if(item.status == false){
            statusProduto = `<div class="card-comprar" onclick(comprar(${item.id}))>
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
                    </div>`;

        document.querySelector("#divProdutos").innerHTML += conteudo;
    });
}

comprar = (itemId) => {
    console.log(itemId);
};

montarCard();

