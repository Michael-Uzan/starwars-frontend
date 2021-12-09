import React from 'react'
import IMovie from '../interface/IMovie.interface'


interface PropType {
    movie: IMovie
}

export const FilmPreview = ({ movie }: PropType) => {
    return (
        <section className="film-preview">
            <h2>{movie.title}</h2>
            <h3>{movie.director}</h3>
            <h4>{movie.releaseDate}</h4>
            <p>{movie.details}</p>
        </section>
    )
}
