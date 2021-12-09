import React from 'react'
import IMovie from '../interface/IMovie.interface'
import { MoviePreview } from './MoviePreview'

interface PropType {
    movies: IMovie[],
}

export const MovieList = ({ movies }: PropType) => {
    return (
        <nav className="nav-movie-list">
            {movies.map((movie: IMovie) => (<MoviePreview key={movie._id} movie={movie} />))}
        </nav>
    )
}
