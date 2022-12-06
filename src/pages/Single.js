import React from 'react'
import './Single.css'
import { useParams } from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import Cast from '../components/Cast/Cast'
import Trailer from '../components/Trailer/Trailer'
import Suggestion from '../components/Suggestions/Suggestion'

const Single = () => {
    let param = useParams()

    const [info, setInfo] = React.useState(null)
    const [showInfo, setShowInfo] = React.useState(true)

    const getInfo = async(type,id) => {
        const resp = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`)
        const data = await resp.json()
        setInfo(data);
        setShowInfo(false)
    }

    React.useEffect(() => {
        let data = true
        if(data) {
            getInfo(param.type, param.id);
        }
        return (() => {
            data = false;
            window.scrollTo(0, 0);
        })
    }, [param.type, param.id])

    if(showInfo) {
        return (
            <section className='single-section'>
                Loading...
            </section>
        )
    } else {
        return (
            <main className='single-section'>
                <img src={`https://image.tmdb.org/t/p/w1280`+info.backdrop_path} alt={info.title || info.name} />
                <div className="container">
                    <section className="inner-container-one">
                        <div className="poster-container">
                            {info.poster_path 
                                ?<img src={`https://image.tmdb.org/t/p/original`+info.poster_path} alt={info.title || info.name} />
                                :<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8Qc3JQWjYZ1Moimi0xMVLbBrqS2DYvhnzA&usqp=CAU' alt={info.title || info.name}/>
                            }
                            
                        </div>
                        <div className="information-container">
                            <h1>{info.title || info.name}</h1>
                            <span className="rating"><FaStar />{Math.floor(info.vote_average)}</span>
                            <ul className='genres'>
                                {info.genres.map(item => <li key={item.id}>{item.name}</li>)} 
                            </ul>
                            <p className="overview">
                                {info.overview}
                            </p>
                            <span className="tagline">
                                {info.tagline}
                            </span>
                            <Cast />
                            <a href={info.homepage} target='_blank' className="website">Official link</a>
                        </div>
                    </section>
                    <section className="inner-container-one">
                        <Trailer title={info.title || info.name}/>
                    </section>

                    <Suggestion />

                </div>
            </main>
        )
    }
}

export default Single
