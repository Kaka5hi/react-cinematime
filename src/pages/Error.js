import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h1>Error!!</h1>
            <p>The page you requested doesn't exist.</p>
            <Link to='/'>Go back</Link>
        </div>
    )
}

export default Error
