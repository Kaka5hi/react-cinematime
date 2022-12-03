import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Sharedlayout.css'

const Sharedlayout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/movie'>movies</Link></li>
                    <li><Link to='/tv'>tv shows</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Sharedlayout
