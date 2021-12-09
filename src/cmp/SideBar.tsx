import React, { useEffect, useState } from 'react'
import IMovie from '../interface/IMovie.interface';
import { starwarsService } from '../services/starwars.service';
import { FilmList } from './FilmList';
import { Loading } from './Loading';

interface PropType {
    movies: IMovie[] | null
}

export const SideBar = ({ movies }: PropType) => {

    if (!movies) return <Loading />

    return (
        <aside className="side-bar">
            <FilmList movies={movies} />
        </aside>
    )
}
