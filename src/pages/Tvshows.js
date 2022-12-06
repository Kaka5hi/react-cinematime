import React from 'react'
import Card from '../components/Cards/Card'
import './Tvshows.css'
import { useNavigate } from 'react-router'
import Footer from '../components/Footer/Footer'

const Tvshows = () => {
    
    let navigate = useNavigate()

    const [tvData, setTvData] = React.useState([])
    const [currentCategory, setCurrentCategory] = React.useState('popular')
    const [page, setPage] = React.useState(1)
    const [value, setValue] = React.useState('')
    const [type, setType] = React.useState('tv')
    const [showBtn, setShowBtn] = React.useState(false)

    const getTvData = async(category) => {
        const resp = await fetch(`https://api.themoviedb.org/3/tv/${category}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=${page}`)
        const data = await resp.json()
        setTvData(data.results)
        setShowBtn(true)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${type}/${value}`)
        setValue('')
    }


    React.useEffect(() => {
        let data = true
        if(data) {
            getTvData(currentCategory, page)
        }

        return (() =>{
            data = false
            window.scrollTo(0, 0)
        })
    }, [currentCategory, page])

    return (
        <>
            <div className='tv-section'>
                <h1>Tv shows</h1>
                <ul className="current-tv-category">
                    <div className="search-side">
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder='Search any show...'
                            />
                        </form>                    
                    </div>
                    <div className="category-side">
                        <button onClick={changeCategory}>Popular</button>
                        <button onClick={changeCategory}>Airing today</button>
                        <button onClick={changeCategory}>Top rated</button>
                    </div>
                </ul>
                <section className="current-tv-container">
                    {tvData.map(item => <Card key={item.id} item={item} type={'tv'} />)}
                </section>

                {showBtn && <button onClick={() => setPage(prev => prev + 1)}>Next page</button>}
            </div>
            <Footer />
        </>
    )
}

export default Tvshows
