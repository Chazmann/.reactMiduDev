import { Boton } from './Boton.jsx'
import {CardMiniconuseState} from './CardMiniconuseState.jsx'

export const FollowContainer = () => {
    const lista = [
        "Confirmar", "Cancelar", "Fiumba"]
    return (
        <div className='fContainer'>
            <div className='algo flex'>
                <i className='material-icons-outlined'>group_add</i>
                  <h3>A quién seguir</h3>
                    </div>
           
            <div className="followContainer">
                <CardMiniconuseState initialIsFollowing={true} userName="Leandro Chazarreta" userNick="Chazmann" />
                <CardMiniconuseState initialIsFollowing={false} userName="Juana Gomez" userNick="juanagomez" />
                <CardMiniconuseState initialIsFollowing={false} userName="Verónica Moreno Flores" userNick="veromoreno" />
                <CardMiniconuseState initialIsFollowing={true} userName="Alan Buscaglia " userNick="Gentleman-Programming" />
            </div>
            <div className="buttonContainer">
                <Boton text={lista[0]} />
                <Boton text={lista[1]} />
                <Boton text={lista[2]} />
            </div>

        </div>
    )
}
