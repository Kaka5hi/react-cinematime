import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Cards/Card'
import './ContentSection.css'


const ContentSection = ({type, heading}) => {
    const [content, setContent] = React.useState([])

    const getContent = async() => {
        const resp = await fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`)
        const data = await resp.json()
        setContent(data.results);
    }

    React.useEffect(()=> {
        getContent()
    }, [])

    return (
        <section className='content-section'>
            <h1>Latest {heading}</h1>            
            <section className="container">
                {content.map(item => <Card key={item.id} item={item} type={type} />)}
            </section>

            <Link to={`/`+type}>View more</Link>
        </section>
    )
}

export default ContentSection
