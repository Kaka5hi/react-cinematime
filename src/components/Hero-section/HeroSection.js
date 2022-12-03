import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'

const Hero = () => {

    const [info, setInfo] = React.useState([])
    const [showHero, setShowHero] = React.useState(true)

    const getInfo = async() => {
        const resp = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`)
        const data = await resp.json()
        setInfo(data.results[Math.floor(Math.random()* 20)]);
        setShowHero(false)
    }

    React.useEffect(() => {
        getInfo()
    }, [])

    if(showHero) {
        return (
            <header>
                <img src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix.jpg" alt="Banner" />
            </header>
        )
    } else {
        return (
            <header>
                <img src="https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix.jpg" alt="Banner" />
                <div className="center-section">
                    <div className="img">
                        <img src={'https://image.tmdb.org/t/p/w500/'+ info.poster_path ||'https://image.tmdb.org/t/p/w500/'+ info.backdrop_path } alt={info.title} />
                    </div>
                    <div className="content">
                        <h1>{info.title}</h1>
                        <span>IMDB rating: {Math.round(info.vote_average)}</span>
                        <p>{info.overview}</p>
                        <Link to={`/single/movie/`+info.id}>Read more</Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Hero
