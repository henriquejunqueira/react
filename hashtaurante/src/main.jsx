import React from 'react' // cria interfaces de usuário
import ReactDOM from 'react-dom/client' // renderiza elementos React na web
import App from './App.jsx' // Importa o componente App de App.jsx, trazendo o código da aplicação

// Cria uma raiz de renderização na página, especificamente no elemento com o id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <React.StrictMode> Identifica possíveis problemas e fornece avisos extras
  // <App /> garante que todo o seu conteúdo e comportamento estejam ativos na interface do usuário
)
