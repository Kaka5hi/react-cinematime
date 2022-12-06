import React from 'react'
import './Trailer.css'
import { useParams } from 'react-router-dom'

const Trailer = ({title}) => {
    let param = useParams()

    const [video, setVideo] = React.useState([])

    const getVideo = async(type, id) => {
        try {
            const resp = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`)
            const data = await resp.json()
            setVideo(data.results);         
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        let data = true
        if(data) {
            getVideo(param.type, param.id)
        }
        return (() => {
            data = false;
        })
    }, [param.type, param.id])

    const videoId = video.find(item => {
        if(item.official === true && item.type === 'Trailer') {
            return item
        }
    })

    return (
        <article className='trailer-container'>
            <h1>Trailer</h1>
            <p>{videoId ? `` : `"Cannot find any trailer."`}</p>
            {videoId &&
                <iframe
                    width="700" 
                    height="380" 
                    src={`https://www.youtube.com/embed/${videoId.key}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title={title}
                />
            }
        </article>
    )
}

export default Trailer
