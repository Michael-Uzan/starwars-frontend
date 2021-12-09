import React from 'react'
import { NavLink } from 'react-router-dom'
import IMovie from '../interface/IMovie.interface'


interface PropType {
    movie: IMovie
}

export const FilmPreview = ({ movie }: PropType) => {
    return (
        <section className="film-preview">
            <NavLink activeClassName="active" exact to={`/movie/${movie._id}`}>{movie.title}</NavLink>
        </section>
    )
}
