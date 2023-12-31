import './cardmini.css'
import { useState } from 'react'


export const CardMini = ({userName, userNick, isFollowing}) => {
   
   console.log(isFollowing)
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
                <aside><button className="follow">{textBoton}</button></aside>
            </article>
        </>
    )
}
