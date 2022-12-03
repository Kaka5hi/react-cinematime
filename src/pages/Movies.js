import React from 'react'
import Card from '../components/Cards/Card'
import './Movies.css'

const Movies = () => {

    const [movieData, setMovieData] = React.useState([])
    const [currentCategory, setCurrentCategory] = React.useState('now_playing')
    const [page, setPage] = React.useState(1)

    const getMovieData = async(category) => {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=${page}`)
        const data = await resp.json()
        setMovieData(data.results);
    }

    const changeCategory = (e) => {
        if(e.target.innerText === 'Upcoming') {
            setCurrentCategory('upcoming')
            setPage(1)
        } else if(e.target.innerText === 'Top Rated'){
            setCurrentCategory('top_rated')
            setPage(1)
        } else {
            setCurrentCategory('now_playing')
            setPage(1)
        }
    }

    React.useEffect(() => {
        getMovieData(currentCategory)
    }, [currentCategory, page])

    return (
        <div className='movies-section'>
            <h1>Movies</h1>
            <ul className="current-movie-category">
                <button onClick={changeCategory}>Now playing</button>
                <button onClick={changeCategory}>Upcoming</button>
                <button onClick={changeCategory}>Top rated</button>
            </ul>
            <section className="current-movie-container">
                {movieData.map(item => <Card key={item.id} item={item} type={'movie'} />)}
            </section>

            <button onClick={() => setPage(prev => prev + 1)}>Next page</button>
        </div>
    )
}

export default Movies
