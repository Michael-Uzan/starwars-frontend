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
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png" />
                <h1>Star Wars</h1>
            </div>
            <form className="filter flex align-center direction-row ">
                <div className='flex'>
                    <label htmlFor="txt">Movie title: </label>
                    <input value={txt} type="text" id="txt" name="txt" onChange={handleChange} placeholder='Search movie' />
                </div>
                <div>
                    <label htmlFor="isFavorite">Only favorite
                        <input value={isFavorite} type="checkbox" id="isFavorite" name="isFavorite" onChange={handleChange} />
                    </label>
                </div>
            </form>
        </header>
    )
}
