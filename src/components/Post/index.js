import React from 'react';
import './style.css';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { IoMdHeartEmpty, IoMdHeart} from 'react-icons/io';
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export function Post({photo, username, caption, imageUrl, likes, time}) {
    return(
        <div className="post">
            <div className="post__header" >
            <div>
            <div className="img-border">
            <img className="profile__photo pointer" src={photo} alt={username} title={username} />
            </div>
                <h3 className="pointer">{username}</h3>
            </div>

                <FiMoreHorizontal className="pointer" />
                
            </div>
            {/* */}
            <img className="post__image" src={imageUrl} alt=""  />
            {/* */}
            <div className="footer-post">

                <IconContext.Provider value={{size: "30px"}}>
                    <section className="engagement-post">
                        <div className="icons-1">
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        <div className="icon"><BsBookmark /></div>

                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>{likes} curtidas</span>
                </section>

                <div className="legend">
                <h4 className="post__text">
                    <strong>{username}</strong> <span className="caption">{caption}</span>
                </h4>
                </div>

                <div className="time-post">
                    <time>HÁ {time}</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon"><BsEmojiSmile /></div>
                        </IconContext.Provider>

                        <input placeholder='Adicione um comentario...' />

                    </div>
            
                    <button>Publicar</button>

                </div>

            </div>
        </div>
    );
}

export default Post;