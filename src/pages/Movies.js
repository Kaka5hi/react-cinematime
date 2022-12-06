import React from 'react'
import Card from '../components/Cards/Card'
import './Movies.css'
import { useNavigate } from 'react-router'
import Footer from '../components/Footer/Footer'

const Movies = () => {

    let navigate = useNavigate()

    const [movieData, setMovieData] = React.useState([])
    const [currentCategory, setCurrentCategory] = React.useState('now_playing')
    const [page, setPage] = React.useState(1)
    const [value, setValue] = React.useState('')
    const [type, setType] = React.useState('movie')
    const [showBtn, setShowBtn] = React.useState(false)

    const getMovieData = async(category) => {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=${page}`)
        const data = await resp.json()
        setMovieData(data.results);
        setShowBtn(true)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${type}/${value}`)
        setValue('')
    }

    React.useEffect(() => {
        let data = true
        if(data) {
            getMovieData(currentCategory, page)
        }

        return (() =>{
            data = false
            window.scrollTo(0, 0)
        })
    }, [currentCategory, page])

    return (
        <>
            <div className='movies-section'>
                <h1>Movies</h1>
                <ul className="current-movie-category">
                    <div className="search-side">
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder='Search any movie...'
                            />
                        </form>
                    </div>
                    <div className="category-side">
                        <button onClick={changeCategory}>Now playing</button>
                        <button onClick={changeCategory}>Upcoming</button>
                        <button onClick={changeCategory}>Top rated</button>
                    </div>
                </ul>
                <section className="current-movie-container">
                    {movieData.map(item => <Card key={item.id} item={item} type={'movie'} />)}
                </section>

                {showBtn && <button onClick={() => setPage(prev => prev + 1)}>Next page</button>}
            </div>
            <Footer />
        </>
    )
}

export default Movies
