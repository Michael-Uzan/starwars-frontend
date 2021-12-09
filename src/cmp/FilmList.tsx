import React from 'react'
import IMovie from '../interface/IMovie.interface'
import { FilmPreview } from './FilmPreview'

interface PropType {
    movies: IMovie[],
}

export const FilmList = ({ movies }: PropType) => {
    return (
        <nav className="nav-movie-list">
            {movies.map((movie: IMovie) => (<FilmPreview key={movie._id} movie={movie} />))}
        </nav>
    )
}
