import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const lista = [
  "Confirmar", "Cancelar", "Fiumba"]

const Button = ({text})=> { return (
  <button>{text}</button>
)}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Button text={lista[0]} />
     <Button text={lista[1]} />
  </React.StrictMode>,
)
