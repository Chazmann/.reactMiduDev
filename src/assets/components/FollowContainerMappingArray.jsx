import { Boton } from './Boton.jsx'
import { CardMiniconuseState } from './CardMiniconuseState.jsx'

const usuarios = [{
    userName: 'Leandro Chazarreta',
    userNick: 'Chazmann',
    isFollowing: true
}, {
    userName: 'Juana Gomez',
    userNick: 'juanagomez',
    isFollowing: true
}, {
    userName: 'Miguel Ángel Durán',
    userNick: 'midudev',
    isFollowing: false
}, {
    userName: 'Verónica Moreno',
    userNick: 'veromoreno',
    isFollowing: true
}, {
    userName: 'Alan Buscaglia',
    userNick: 'Gentleman-Programming',
    isFollowing: false
}]


export const FollowContainerMap = () => {
    const lista = [
        "Confirmar", "Cancelar", "Fiumba"]
    return (
        <div className='fContainer'>
            <div className='algo flex'>
                <i className='material-icons-outlined'>group_add</i>
                <h3>A quién seguir</h3>
            </div>

            <div className="followContainer">{
                usuarios.map(user => {
                    const { userName, userNick, isFollowing } = user
                    return (
                        <CardMiniconuseState key={userName} initialIsFollowing={isFollowing} userName={userName} userNick={userNick} />)
                })
            }


            </div>
            <div className="buttonContainer">
                <Boton text={lista[0]} />
                <Boton text={lista[1]} />
                <Boton text={lista[2]} />
            </div>

        </div>
    )
}
