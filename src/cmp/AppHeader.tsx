import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from '../hooks/useForm'

interface PropType {
    onChangeFilter: () => void
}

export const AppHeader = ({ onChangeFilter }: any) => {

    const [filterBy, handleChange] = useForm({
        txt: '',
        isFavorite: true,
    }, onChangeFilter)

    const { txt, isFavorite } = filterBy

    return (
        <header className=" main-header full flex space-between">
            <div className='flex'>
                <label htmlFor="txt">Movie title
                    <input value={txt} type="text" id="txt" name="txt" onChange={handleChange} />
                </label>
            </div>
            <div>
                <label htmlFor="isFavorite">Only favorite
                    <input value={isFavorite} type="checkbox" id="isFavorite" name="isFavorite" onChange={handleChange} />
                </label>
            </div>
        </header>
    )
}
