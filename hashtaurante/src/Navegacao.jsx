function Navegacao({ alterarPaginaSelecionada }){ // Recebendo os títulos como uma prop
    return (
        <div className="navegacao">

            <button className="botao-navegacao" onClick={() => alterarPaginaSelecionada(0)} >Pratos Principais</button>
            <button className="botao-navegacao" onClick={() => alterarPaginaSelecionada(1)} >Sobremesas</button>
            <button className="botao-navegacao" onClick={() => alterarPaginaSelecionada(2)} >Bebidas</button>
        </div>
    );
}

export default Navegacao;