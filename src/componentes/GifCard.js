import React from 'react'

const GifCard = (props) => {

    const { imagen, titulo, descripcion, link } = props;
    return (
        <div>
            <div class="card">
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <a href={link} className="btn btn-primary">Ir a GIF</a>
                </div>
            </div>

        </div >
    )
}

export default GifCard
