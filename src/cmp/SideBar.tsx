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
    if (!movies.length) return (<div>Sorry no results...</div>)

    return (
        <aside className="side-bar">
            <MovieList movies={movies} />
        </aside>
    )
}
