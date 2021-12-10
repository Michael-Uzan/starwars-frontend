import React, { useEffect, useState } from 'react'
import { Loading } from '../cmp/Loading';
import { starwarsService } from '../services/starwars.service';
import { LikeButton } from '../cmp/LikeButton';

export const MovieDetails = ({ match, loadMovies, history }: any) => {

    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        loadMovie();
    }, [match.params.movieId]);

    const loadMovie = async () => {
        const { movieId } = match.params;
        const movie = await starwarsService.getById(movieId)
        console.log('movie', movie)
        if (movie) setMovie(movie)
        else history.push('/')
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
        <section className="movie-details tac ">
            <div className="flex space-around">
                <div className="title flex align-center">
                    <h1>{movie.title}</h1>
                    <LikeButton isLike={movie.isFavorite} onLikeClick={onLikeClick} />
                </div>
            </div>
            <section className="main-details flex">
                <div>
                    <img src={movie.img} />
                </div>
                <div className="tac">
                    <h3>Director: {movie.director}</h3>
                    <h4>Release Date: {movie.releaseDate}</h4>
                    <p>{movie.details}</p>
                </div>
            </section>
        </section>
    )
}
