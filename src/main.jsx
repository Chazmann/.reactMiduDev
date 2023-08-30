import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Boton } from './assets/components/Boton.jsx'
import { CardMini } from './assets/components/CardMini.jsx'
import { CardMiniconuseState } from './assets/components/CardMiniconuseState.jsx'
const lista = [
  "Confirmar", "Cancelar", "Fiumba"]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className="followContainer">
      <CardMiniconuseState isFollowing userName="Leandro Chazarreta" userNick="Chazmann" />
      <CardMini isFollowing userName="Verónica Moreno Flores" userNick="veromoreno" />
      <CardMini isFollowing={false} userName="Alan Buscaglia " userNick="Gentleman-Programming" />
    </div>
    <div className="buttonContainer">
      <Boton text={lista[0]} />
      <Boton text={lista[2]} />
    </div>

  </React.StrictMode>,
)
