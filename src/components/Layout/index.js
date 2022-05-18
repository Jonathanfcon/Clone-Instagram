import React, { useState } from "react";
import { Post } from '../Post'
import { Story } from '../Story'
import Suggestion from "../Suggestion";
import './style.css'

import Photo1 from "./images/Photo1.jpg";
import Photo5 from "./images/Photo5.jpg";
import Photo8 from "./images/Photo8.jpg";
import Post1 from "./images/Post1.jpg";
import Post2 from "./images/Post2.webp";
import Post3 from "./images/Post3.webp";

export function Layout() {

    const [posts, setPosts] = useState([
        {
          photo: Photo8,
          username: "amandamsc_2020",
          caption: "Eu queria fazer uma Cavaleira no tema Dragão e essa moça aí surgiu XD Eu queria ter uma descrição melhor pra ela ;--;",
          imageUrl: Post1,
          likes: "61",
          time: "1 HORA",
        },
        {
          photo: Photo5,
          username: "am0rik",
          caption: "Um projeto beeeem antigo q eu nunca terminei pq queria pintar de aquarela,porém foi muito foda de fazer. #frog #sapo #saponalagoa #nankin #desenhos #cogumelos #brisaboa",
          imageUrl:
            Post2,
          likes: "84",
          time: "2 HORAS",
        },
        {
          photo: Photo1,
          username: "marshmallowcomcanela",
          caption: "Um desenho pra um projeto no #unotfm . Vai servir como fundo de salas!! 🌸🌸🌸 #digitalart #illustration #ilustrator #atelier801 #tranformice #artoninstagram #art #sketch #skecthbook #style #draw #fofo #myart #oc #mouse #mice #area801 #jojo #dio #diobrando #jonathan #jonathanjoestar",
          imageUrl:
            Post3,
          likes: "42",
          time: "30 MINUTOS",
        },
      ]);

    return (
        <>

            <div className="MainGrid">

                <div className="firstColumn" style={{gridArea: "firstColumn"}}>

                <div className="storyBox">
                    <Story />
                </div>

                <div className="postBox">
                {posts.map((post) => (
                    <Post
                        photo={post.photo}
                        username={post.username}
                        caption={post.caption}
                        imageUrl={post.imageUrl}
                        likes={post.likes}
                        time={post.time}
                    />
                ))}
                </div>

                </div>
                
                <div style={{gridArea: "secondColumn"}}>
                <div className="suggestionBox">
                    <Suggestion />
                </div>
                </div>

            </div>
        </>
    )
}