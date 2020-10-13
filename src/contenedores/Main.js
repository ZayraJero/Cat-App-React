import React, { useEffect, useState } from 'react'
import Navbar from '../componentes/Navbar';
import Search from '../componentes/Search';
import GifCard from '../componentes/GifCard';
import axios from 'axios';

const Main = () => {

    const [gifs, setGifs] = useState([]);

    const getGifs = () => {
        const URL = 'https://api.giphy.com/v1/gifs/search?api_key=kOqjohbxTPsRUMgk1mqiboy7620PHBM0&q=cat&limit=5'

        axios.get(URL).then(respuesta => {
            console.log(respuesta.data.data);
            setGifs(respuesta.data.data)
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        getGifs();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <Search />
                {gifs.map((gif, index) => {
                    return (
                        <GifCard
                            imagen={gif.images.downsized_medium.url}
                            titulo={gif.title}
                            descripcion={"¡Di hola al gatito!"}
                            link={gif.url}
                            key={gif.id} />
                    )
                })}
                {/* <GifCard
                    imagen="https://media1.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif?cid=81e05bca8f0n9jxz4oipuu8ldgceuqxua6a5imoaukjo5fsk&rid=giphy.gif"
                    titulo="Cat Kitten GIF by Demic"
                    descripcion="descripcion"
                /> */}

            </div>


        </div>
    )
}

export default Main
