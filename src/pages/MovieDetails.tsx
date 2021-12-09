import React, { useEffect, useState } from 'react'
import { Loading } from '../cmp/Loading';
import { starwarsService } from '../services/starwars.service';
import { LikeButton } from '../cmp/LikeButton';

export const MovieDetails = ({ match }: any) => {

    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        loadMovie();
    }, [match.params.movieId]);

    const loadMovie = async () => {
        const { movieId } = match.params;
        const movie = await starwarsService.getById(movieId)
        setMovie(movie)
    };

    const onLikeClick = async () => {
        const newMovie = JSON.parse(JSON.stringify(movie))
        newMovie.isFavorite = !newMovie.isFavorite
        const updatedMovie = await starwarsService.updateMovie(newMovie)
        setMovie(updatedMovie)
    }

    if (!movie) return <Loading />

    return (
        <section className="movie-details">
            <LikeButton isLike={movie.isFavorite} onLikeClick={onLikeClick} />
            <img src={movie.img} />
            <h2>{movie.title}</h2>
            <h3>Director: {movie.director}</h3>
            <h4>Release Date: {movie.releaseDate}</h4>
            <p>{movie.details}</p>
        </section>
    )
}
