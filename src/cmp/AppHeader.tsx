import React from 'react'
import { NavLink } from 'react-router-dom'

export const AppHeader = () => {

    return (
        <header className=" main-header full flex space-between">
            <nav className="flex justify-center">
                <NavLink activeClassName="active" exact to="/" >Films</NavLink>
            </nav>
        </header>
    )
}
