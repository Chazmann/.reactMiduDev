import './cardmini.css'




export const CardMini = ({userName, userNick, isFollowing}) => {
   
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
                <aside><button className="follow">Seguir</button></aside>
            </article>
        </>
    )
}
