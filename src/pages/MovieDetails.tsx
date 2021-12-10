import React, { useEffect, useState } from 'react'
import { Loading } from '../cmp/Loading';
import { starwarsService } from '../services/starwars.service';
import { LikeButton } from '../cmp/LikeButton';

export const MovieDetails = ({ match, loadMovies }: any) => {

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
        loadMovies()
    }

    if (!movie) return <Loading />

    return (
        <section className="movie-details tac">
            <h1>{movie.title}</h1>
            <img src={movie.img} />
            <LikeButton isLike={movie.isFavorite} onLikeClick={onLikeClick} />
            <h3>Director: {movie.director}</h3>
            <h4>Release Date: {movie.releaseDate}</h4>
            <p>{movie.details}</p>
        </section>
    )
}