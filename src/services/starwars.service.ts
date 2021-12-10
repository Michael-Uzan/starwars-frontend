'use strict'
import axios from 'axios'
import IFilter from '../interface/IFilter.interface';
import IMovie from '../interface/IMovie.interface';
import { storageService } from './async-storage.service';
import { localStorageService } from './storageService';
import { utilService } from './util.service';

export const starwarsService = {
    getMovies,
    getById,
    updateMovie
}

const STARWARS_DB: string = 'starwarsDB';
const STARWARS_API: string = 'https://swapi.dev/api/films/'

async function getMovies(filterBy: IFilter): Promise<IMovie[]> {
    const movies = await storageService.query(STARWARS_DB) || await _getMoviesAPI()
    let moviesToShow = JSON.parse(JSON.stringify(movies))
    if (filterBy) {
        const { isFavorite, txt } = filterBy
        const regex = new RegExp(txt, "i");
        moviesToShow = moviesToShow.filter((movie: IMovie) => {
            return (regex.test(movie.title)
                && (isFavorite ? movie.isFavorite : true))
        })
    }
    return moviesToShow
}

async function _getMoviesAPI(): Promise<IMovie[]> {
    const res: any = await axios.get(STARWARS_API)
    const movies = res.data.results.map((result: any) => {
        return {
            _id: utilService.makeId(),
            isFavorite: (Math.random() < 0.5),
            title: result.title,
            director: result.director,
            releaseDate: result.release_date,
            details: result.opening_crawl,
            img: _getImg(result.title)
        }
    })
    localStorageService.save(STARWARS_DB, movies)
    return movies
}

async function getById(movieId: string): Promise<any> {
    try {
        const movie = await storageService.get(movieId, STARWARS_DB)
        return movie
    } catch (err) {
        console.log('error get an item', err)
    }
}

async function updateMovie(movie: IMovie): Promise<IMovie> {
    const updatedMovie = await storageService.put(movie, STARWARS_DB)
    return updatedMovie
}

function _getImg(title: string): string {
    switch (title) {
        case 'A New Hope':
            return 'https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg'
        case 'The Empire Strikes Back':
            return 'https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg'
        case 'Return of the Jedi':
            return 'https://images-na.ssl-images-amazon.com/images/I/81g8vEs4ixL.jpg'
        case 'The Phantom Menace':
            return 'https://m.media-amazon.com/images/I/71rFhtOvY+L._SL1372_.jpg'
        case 'Attack of the Clones':
            return 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Attackoftheclones_novel.jpg/220px-Attackoftheclones_novel.jpg'
        case 'Revenge of the Sith':
            return 'https://i.ebayimg.com/images/g/J-cAAMXQMmJROYZf/s-l500.jpg'
        default:
            return 'https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg'
    }
}