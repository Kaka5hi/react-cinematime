import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './Search.css'
import Card from '../components/Cards/Card'
import Footer from '../components/Footer/Footer'


const Search = () => {
    let param = useParams()

    const [info, setInfo] = React.useState([])
    const [resultFound, setResultFound] = React.useState(true)

    const getMovieData = async(type, query) => {
        const resp = await fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&query=${query}`)
        const data = await resp.json()
        if(data.total_results === 0) {
            setResultFound(false)
            return
        } else {
            setInfo(data.results); 
        }
    }

    React.useEffect(() => {
        getMovieData(param.type, param.query)
    }, [param.type, param.query])

    return (
        <>
            <div className='search-section'>
                <h1>Search result for '{param.query}'</h1>
                <section className="inner-container">
                    {resultFound 
                        ? info.map(item => <Card key={item.id} item={item} type={param.type} />)
                        : <div className='alert'>
                            <p>"No results found"</p>
                            <Link to={`/${param.type}`}>back to {param.type} page</Link>
                        </div>
                    }
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Search
