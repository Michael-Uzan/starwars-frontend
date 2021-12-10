import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from '../hooks/useForm'

interface PropType {
    onChangeFilter: () => void
}

export const AppHeader = ({ onChangeFilter }: any) => {

    const [filterBy, handleChange] = useForm({
        txt: '',
        isFavorite: false,
    }, onChangeFilter)

    const { txt, isFavorite } = filterBy

    return (
        <header className=" main-header full flex direction-col ">
            <div className="top-header flex">
                <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo.png" />
            </div>
            <form className="filter flex  ">
                <div className='flex align-center'>
                    <label htmlFor="txt">Movie title: </label>
                    <input className="search" value={txt} type="text" id="txt" name="txt" onChange={handleChange} placeholder='Search movie' />
                </div>
                <div className='flex align-center'>
                    <input value={isFavorite} type="checkbox" id="isFavorite" name="isFavorite" onChange={handleChange} />
                    <label htmlFor="isFavorite">Only favorite</label>
                </div>
            </form>
        </header>
    )
}
