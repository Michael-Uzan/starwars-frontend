import React from 'react'
import { NavLink } from 'react-router-dom'
import IMovie from '../interface/IMovie.interface'
import likeOn from '../assets/imgs/like-on.png';

interface PropType {
    movie: IMovie
}

export const MoviePreview = ({ movie }: PropType) => {
    return (
        <section className="film-preview">
            <NavLink activeClassName="active" exact to={`/movie/${movie._id}`}>
                <div>{movie.title}</div>
                {movie.isFavorite && <img src={likeOn} />}
            </NavLink>
        </section>
    )
}
