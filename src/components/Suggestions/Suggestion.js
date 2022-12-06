import React from 'react'
import './Suggestion.css'
import { Link, useParams } from 'react-router-dom'
import Card from '../Cards/Card'

const Suggestion = () => {
    let param = useParams()

    const [suggest, setSuggest] = React.useState([])
    const [toggleSuggestion, setToggleSuggestion] = React.useState(true)
    const [msg, setMsg] = React.useState(false)
    const [goHome, setGoHome] = React.useState(false)

    const getSuggest = async(type,id) => {
        const resp = await fetch(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=1`)
        const data = await resp.json()
        if(data.total_results === 0) {
            setMsg(true)
        } else {
            setSuggest(data.results);
            setGoHome(true)
        }
    }

    React.useEffect(() => {
        let data = true
        if(data) {
            getSuggest(param.type, param.id);
        }
        return (() => {
            data = false;
            setToggleSuggestion(true)
        })
    }, [param.type, param.id])

    const limited = suggest.slice(0,5).map(item => <Card key={item.id} item={item} type={param.type} />)
    const all = suggest.map(item => <Card key={item.id} item={item} type={param.type} />)

    return (
        <section className='suggestion-section'>
            <h1>Similar {param.type === 'tv' ? `TV shows` : `Movies`}</h1>
            {msg && <p>"This is probably the masterpiece that's why cannot find anything similar for suggestion or no one ever check it tbh!!"</p>}
            <div className="inner-container">
                {toggleSuggestion ? limited : all}
            </div>

            {goHome
                ?<button onClick={() => setToggleSuggestion(prev => !prev)}>
                    {toggleSuggestion ? `Show more..` : `Show less..`}
                </button>
                :<Link to='/'>Return to homepage</Link>
            }
        </section>
    )
}

export default Suggestion
