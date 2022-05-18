import ProfilePhoto from './images/ProfilePhoto.jpg'
import Photo9 from './images/Photo9.jpg'
import Photo10 from './images/Photo10.jpg'
import Photo11 from './images/Photo11.jpg'
import Photo12 from './images/Photo12.jpg'
import Photo13 from './images/Photo13.png'
import './style.css'

export function Suggestion() {
    return (

        <div className="container-suggestion">
        
            <div className="header-suggestion">

                <img src={ProfilePhoto} />

                <div className="user-info-suggestion">

                    <div className="infos">
                        <span>umjohnqualquer</span>
                        <p>Jonathan Ferreira</p>
                    </div>

                    <button className="switch">Mudar</button>

                </div>
            </div>
            <div className="header-user-info-suggestion">
                <div className='user-info-1'><p>3</p><span>Publicações</span></div>
                <div className='user-info-2'><p>103</p><span>Seguidores</span></div>
                <div className='user-info-3'><p>136</p><span>Seguindo</span></div>
            </div>
            <div className="header-main-suggestion">

                <p>Sugestões para você</p>

                <span>Ver tudo</span>
            </div>

            <div className="user-suggestion">

                <div className="infos-suggestion">
                    <img src={Photo9} />

                    <div className="info-suggestion">
                        <span>pet_foolery</span>
                        <p>Ben</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">
                    <img src={Photo10} />

                    <div className="info-suggestion">
                        <span>formiga_fakemon</span>
                        <p>Formiga</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">
                    <img src={Photo11} />

                    <div className="info-suggestion">
                        <span>buzsheep</span>
                        <p>Buz Sheep</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">
                    <img src={Photo12} />

                    <div className="info-suggestion">
                        <span>isaky_tm</span>
                        <p>Isabel Terol Martínez</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

                <div className="infos-suggestion">
                    <img src={Photo13} />

                    <div className="info-suggestion">
                        <span>sad_istfied</span>
                        <p>SAD-ist</p>
                    </div>

                    <button className="follow">Seguir</button>
                </div>

            </div>

            <footer className="footer-suggestion" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

                <p>&copy; 2022 INSTAGRAM FROM META</p>

            </footer>
            

        </div>
    )
}

export default Suggestion;