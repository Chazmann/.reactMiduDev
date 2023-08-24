import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Boton } from './assets/components/Boton.jsx'
const lista = [
  "Confirmar", "Cancelar", "Fiumba"]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Boton text={lista[0]} />
     <Boton text={lista[1]} />
  </React.StrictMode>,
)
