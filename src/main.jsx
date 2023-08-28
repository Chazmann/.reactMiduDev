import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Boton } from './assets/components/Boton.jsx'
import { CardMini } from './assets/components/CardMini.jsx'
const lista = [
  "Confirmar", "Cancelar", "Fiumba"]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className="followContainer">
      <CardMini isFollowing userName="Leandro Chazarreta" userNick="Chazmann" />
      <CardMini isFollowing userName="Miguel Duran" userNick="midudev" />
      <CardMini isFollowing={false} userName="Peralta Ramos" userNick="pheralb" />
    </div>
    <div className="buttonContainer">
      <Boton text={lista[0]} />
      <Boton text={lista[2]} />
    </div>

  </React.StrictMode>,
)
