import React from 'react'
import IMovie from '../interface/IMovie.interface'

interface PropType {
    movie: IMovie
}

export const FilmShortPreview = ({ movie }: PropType) => {
    return (
        <section className="film-short-preview">
            <p>{movie.title}</p>
        </section>
    )
}
