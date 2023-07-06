import React from 'react'
import classes from './Home.module.css'
import Card from './Card'
import Button from './Button'
const Home = props => {
    return (
        <Card className = {classes.home}>
            <h1>Welcome back!</h1>
            <Button onClick={props.onLogout}>Logout</Button>
        </Card>
    )
}

export default Home