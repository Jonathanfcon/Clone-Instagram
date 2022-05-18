import './style.css'
import Photo1 from './images/Photo1.jpg'
import Photo2 from './images/Photo2.jpg'
import Photo3 from './images/Photo3.jpg'
import Photo4 from './images/Photo4.jpg'
import Photo5 from './images/Photo5.jpg'
import Photo6 from './images/Photo6.jpg'
import Photo7 from './images/Photo7.jpg'
import Photo8 from './images/Photo8.jpg'

export function Story() {

    return (

        <div className="container">

            <div className="user-elements">

                <div className="story-border">
                    <img className="img-user-story" src={Photo1} />
                </div>

                <span>marshmallowco...</span>

            </div>

            <div className="user-elements">

                <div className="story-border">
                    <img className="img-user-story" src={Photo2} />
                </div>

                <span>sweetchardom</span>

            </div>

            <div className="user-elements">

                <div className="story-border">
                    <img className="img-user-story" src={Photo3} />
                </div>

                <span>drucyw</span>

            </div>

            <div className="user-elements">

                <div className="story-border">
                    <img className="img-user-story" src={Photo4} />
                </div>

                <span>_neeewt</span>

            </div>

            <div className="user-elements">

                <div className="story-border">
                    <img className="img-user-story" src={Photo5} />
                </div>

                <span>am0rik</span>

            </div>

            <div className="user-elements">

                <div className="story-border">
                    <img className="img-user-story" src={Photo6} />
                </div>

                <span>starlitcookie</span>

            </div>

            <div className="user-elements">

                <div className="story-border">
                    <img className="img-user-story" src={Photo7} />
                </div>

                <span>leitedrawn</span>

            </div>

            <div className="user-elements">

                <div className="story-border">
                    <img className="img-user-story" src={Photo8} />
                </div>

                <span>amandamsc_...</span>

            </div>

        </div>


    )

}