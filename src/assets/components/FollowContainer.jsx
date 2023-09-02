import { Boton } from './Boton.jsx'
import {CardMiniconuseState} from './CardMiniconuseState.jsx'

export const FollowContainer = () => {
    const lista = [
        "Confirmar", "Cancelar", "Fiumba"]
    return (
        <div className='fContainer'>
            <div className="followContainer">
                <CardMiniconuseState isFollowing userName="Leandro Chazarreta" userNick="Chazmann" />
                <CardMiniconuseState isFollowing userName="Juana Gomez" userNick="juanagomez" />
                <CardMiniconuseState isFollowing userName="Verónica Moreno Flores" userNick="veromoreno" />
                <CardMiniconuseState isFollowing={true} userName="Alan Buscaglia " userNick="Gentleman-Programming" />
            </div>
            <div className="buttonContainer">
                <Boton text={lista[1]} />
                <Boton text={lista[1]} />
                <Boton text={lista[1]} />
            </div>

        </div>
    )
}
