import React from 'react';

const Pelicula = ({ pelicula }) => {

    const {  title, poster_path, original_title, id, backdrop_path } = pelicula;
    return ( 
        <div className ="col s12 m6 l3">
            <div className="card">
                <div className="carmaged-i">
                    <img src={ poster_path } alt="Imagen No Disponible"></img>
                </div>
            </div>

            <div className="card-content grey lighten-4">
                <img src={backdrop_path} alt="Imagen No Disponible"></img>
                <h4>{ title }</h4>
                <p>{id}</p>
                <p>{original_title}</p>
            </div>
        </div>
     );
};
 
export default Pelicula;
