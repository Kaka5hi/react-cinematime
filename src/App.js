import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Tvshows from './pages/Tvshows'
import Search from './pages/Search'
import Single from './pages/Single'
import Error from './pages/Error'
import Sharedlayout from './pages/Sharedlayout'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Sharedlayout />}>
                    <Route index element={<Home />} />
                    <Route path='/movie' element={<Movies />}/>
                    <Route path='/tv' element={<Tvshows />}/>
                    <Route path='/search/:type/:query' element={<Search />}/>
                    <Route path='/single/:type/:id' element={<Single />}/>
                    <Route path='*' element={<Error />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
