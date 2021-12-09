import React, { useEffect, useState } from 'react'
import { FilmList } from '../cmp/FilmList';
import { Loading } from '../cmp/Loading';
import { starwarsService } from '../services/starwars.service'

export const FilmsApp = () => {

    const [movies, setMovies] = useState<any>(null);

    useEffect(() => {
        loadMovies()
    }, [])

    const loadMovies = async () => {
        const movies = await starwarsService.getMovies()
        setMovies(movies)
    }

    if (!movies) return <Loading />

    return (
        <section className="films-app">
            <FilmList movies={movies} />
        </section>
    )
}
