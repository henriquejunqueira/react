import React from 'react';
import './App.css';
import hashtauranteImg from "./assets/hashtaurante.webp";
import Navegacao from './Navegacao';
import ItemCardapio from './ItemCardapio';
import { pratosPrincipais, sobremesas, bebidas } from './cardapio';

// Retorna a estrutura da interface do usuário do aplicativo, serve para encapsular e organizar os componentes
function App() {
  const [paginaSelecionada, alterarPaginaSelecionada] = React.useState(0);
  const secoesMenu = [pratosPrincipais, sobremesas, bebidas];
  const titulos = ['Pratos de dar água na boca!!!', 'Melhores sobremesas pra saborear!!!', 'Vai uma bebida gelada aí?']; // Adicionando os títulos aqui
  const tituloSelecionado = titulos[paginaSelecionada]; // Obtendo o título selecionado

  // className atribui classes CSS a elementos JSX
  // {variavel} atribui uma variavel dentro do atributo react, no caso abaixo vem da importação de "hashtauranteImg"
  // fragmentos <></> Agrupa elementos em único elemento de nível superior sem precisar adicionar um <div> ou qualquer outro elemento HTML
  return (
    <>
      <img src={hashtauranteImg} className='capa' />
      <Navegacao alterarPaginaSelecionada={alterarPaginaSelecionada} />
      
      <h2>{tituloSelecionado}</h2> {/* Título dinâmico que muda de acordo com o botão clicado */}

      <div className='menu'>
        {secoesMenu[paginaSelecionada].map((prato) => (

          <ItemCardapio 
            nome={prato.nome}
            preco={prato.preco}
            descricao={prato.descricao}
            imagem={prato.imagem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
