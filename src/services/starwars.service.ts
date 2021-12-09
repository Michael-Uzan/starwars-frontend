'use strict'
import axios from 'axios'
import { storageService } from './async-storage.service';
import { httpService } from './http.service';
import { localStorageService } from './storageService';
import { utilService } from './util.service';

export const starwarsService = {
    getMovies
}

const STARWARS_DB: string = 'starwarsDB';
const STARWARS_API: string = 'https://swapi.dev/api/films/'

async function getMovies(): Promise<any> {
    const movies = await storageService.query(STARWARS_DB) || await _getMoviesAPI()
    return movies
}

async function _getMoviesAPI(): Promise<any> {
    const res: any = await axios.get(STARWARS_API)
    const movies = res.data.results.map((result: any) => {
        return {
            _id: utilService.makeId(),
            isFavorite: false,
            title: result.title,
            director: result.director,
            releaseDate: result.release_date,
            details: result.opening_crawl
        }
    })
    localStorageService.save(STARWARS_DB, movies)
    return movies
}



