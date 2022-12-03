import React from 'react'
import './Cast.css'
import { useParams } from 'react-router'


const Cast = () => {
    let param = useParams()

    const [info, setInfo] = React.useState([])
    const [toggleCast, setToggleCast] = React.useState(true)

    const getInfo = async(type, id) => {
        const resp = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US `)
        const data = await resp.json()
        setInfo(data.cast)
    }

    React.useEffect(()=> {
        getInfo(param.type, param.id)
    }, [])

    const limitedCast = info.slice(0,5).map(actor => {
        return(
            <article key={actor.id} className='details'>
                <img src={`https://image.tmdb.org/t/p/w500`+actor.profile_path} alt={actor.original_name} />
                <span>{actor.character}</span>
                <p>{actor.original_name}</p>
            </article>
        )
    })

    const allCast =  info.slice(0,10).map(actor => {
        return(
            <article key={actor.id} className='details'>
                <img src={`https://image.tmdb.org/t/p/w500`+actor.profile_path} alt={actor.original_name} />
                <span>{actor.character}</span>
                <p>{actor.original_name}</p>
            </article>
        )
    })


    return (
        <div  className="casting-container">
            <h1>Actors</h1>
            <div className="casting-inner-container">
                {toggleCast ? limitedCast : allCast}
            <button onClick={() => setToggleCast(prev => !prev)}>
                {toggleCast ? `Show more..` : `Show less..`}
            </button>
            </div>
        </div>
    )
}

export default Cast
