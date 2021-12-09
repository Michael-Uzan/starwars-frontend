import React, { useEffect, useState } from 'react'
import { starwarsService } from '../services/starwars.service';
import { FilmList } from './FilmList';
import { Loading } from './Loading';

export const SideBar = () => {

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
        <aside className="side-bar">
            <FilmList movies={movies} />
        </aside>
    )
}
