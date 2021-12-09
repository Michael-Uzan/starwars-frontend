import React, { useEffect, useState } from 'react'
import IMovie from '../interface/IMovie.interface';
import { starwarsService } from '../services/starwars.service';
import { MovieList } from './MovieList';
import { Loading } from './Loading';

interface PropType {
    movies: IMovie[] | null
}

export const SideBar = ({ movies }: PropType) => {

    if (!movies) return <Loading />

    return (
        <aside className="side-bar">
            <MovieList movies={movies} />
            {!movies.length && <div>Sorry no results...</div>}
        </aside>
    )
}
