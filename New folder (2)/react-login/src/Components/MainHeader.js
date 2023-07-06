import React from 'react'
import classes from './MainHeader.module.css'
import Navigation from './Navigation'

const MainHeader = props => {
    return (
            <header className={classes.header}>
                <h1>A Typical Login Page</h1>
                <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout}/>
            </header>
    )
}

export default MainHeader 