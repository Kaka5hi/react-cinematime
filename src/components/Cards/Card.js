import React from 'react'
import './Card.css'
import Modal from '../Modal/Modal'

const Card = ({item, type}) => {

    const [showModal, setShowModal] = React.useState(false)

    const [image, setImage] = React.useState(item.poster_path)
    return (
        <article className='card'>
            {image ? <img src={`https://image.tmdb.org/t/p/w342/`+ item.poster_path} alt={item.title || item.name} /> : <img src='https://www.prokerala.com/movies/assets/img/no-poster-available.jpg' alt={item.title || item.name} />}

            <div className="info">
                <span>{item.title || item.name}</span>
                <button onClick={() => setShowModal(true)}>Read more</button>
            </div>
            {showModal && <Modal item={item} type={type} setShowModal={setShowModal}/>}
        </article>
    )
}

export default Card
