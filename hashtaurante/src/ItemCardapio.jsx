//import { enroladinhoMignon } from "./cardapio";

// função responsável por montar um card de um item do cardápio
function ItemCardapio({ nome, descricao, preco, imagem }){ // (destructuring) Essa sintaxe permite extrair propriedades de objetos de forma mais conveniente
    return (
        <div>
            <div className="container-item-cardapio">
                <div className="informacoes-item-cardapio">
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                    <p>{preco}</p>
                </div>
                <img src={imagem} className="imagem-item-cardapio" />
            </div>
        </div>
    );
}

export default ItemCardapio;