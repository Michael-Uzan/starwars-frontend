import React, { useEffect, useState } from 'react'
import { Loading } from '../cmp/Loading';
import { starwarsService } from '../services/starwars.service';

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

    if (!movie) return <Loading />

    return (
        <section className="movie-details">
            <img src={movie.img} />
            <h2>{movie.title}</h2>
            <h3>{movie.director}</h3>
            <h4>{movie.releaseDate}</h4>
            <p>{movie.details}</p>
        </section>
    )
}
