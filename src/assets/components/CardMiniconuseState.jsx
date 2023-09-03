import './cardmini.css'
import { useState } from 'react'

export const CardMiniconuseState = ({userName, userNick}) => {
   const [isFollowing, setIsFollowing] = useState(false)

    //==> es igual a ==>

    // const state = useState(false)
    // const isFollowing = state[0]
    // const setIsFollowing = state[1]
const handleClick = () =>{
    setIsFollowing(!isFollowing)
}
const butonClass = isFollowing ? 'follow following' : 'follow unfollow'
   
   const textBoton = isFollowing ? 'Siguiendo' : 'Seguir'
    return (
        <>
        
            <article className="tw-followCard">
                <header>
                    <img src={`https://unavatar.io/${userNick}`} alt={userName} />
                    <div>
                            <strong>{userName}</strong>
                        <span>{userNick}</span>
                    </div>
                </header>
                <aside><button className={butonClass} onClick={handleClick}>
                    <text className='followText'>{textBoton}</text>
                    <text className='unfollowText'>Dejar de seguir</text>
                    </button></aside>
            </article>
        </> 
    )
}
