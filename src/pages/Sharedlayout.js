import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Sharedlayout.css'
import {RiMovieFill} from 'react-icons/ri'

const Sharedlayout = () => {
    return (
        <>
            <nav>
                <ul>
                    <div className="left">
                        <li><Link to='/'><RiMovieFill/>Cinematime</Link></li>
                    </div>
                    <div className="right">
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/movie'>movies</Link></li>
                        <li><Link to='/tv'>tv shows</Link></li>
                    </div>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Sharedlayout
