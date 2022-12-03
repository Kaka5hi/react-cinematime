import React from 'react'
import Card from '../components/Cards/Card'
import './Tvshows.css'

const Tvshows = () => {
    const [tvData, setTvData] = React.useState([])
    const [currentCategory, setCurrentCategory] = React.useState('popular')
    const [page, setPage] = React.useState(1)

    const getTvData = async(category) => {
        const resp = await fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=${page}`)
        const data = await resp.json()
        setTvData(data.results);
    }

    const changeCategory = (e) => {
        if(e.target.innerText === 'Airing Today') {
            setCurrentCategory('airing_today')
            setPage(1)
        } else if(e.target.innerText === 'Top Rated'){
            setCurrentCategory('top_rated')
            setPage(1)
        } else {
            setCurrentCategory('popular')
            setPage(1)
        }
    }

    React.useEffect(() => {
        getTvData(currentCategory)
    }, [currentCategory, page])

    return (
        <div className='tv-section'>
            <h1>Tv shows</h1>
            <ul className="current-tv-category">
                <button onClick={changeCategory}>Popular</button>
                <button onClick={changeCategory}>Airing today</button>
                <button onClick={changeCategory}>Top rated</button>
            </ul>
            <section className="current-tv-container">
                {tvData.map(item => <Card key={item.id} item={item} type={'tv'} />)}
            </section>

            <button onClick={() => setPage(prev => prev + 1)}>Next page</button>
        </div>
    )
}

export default Tvshows
