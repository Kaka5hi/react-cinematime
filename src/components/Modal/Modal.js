import React from 'react'
import './Modal.css'
import { Link} from 'react-router-dom'

const Modal = ({setShowModal, item, type}) => {

    return (
        <section className='modal-container'>
            <article className="modal-inner-container">
                <div className="modal-img">
                    <img src={'https://image.tmdb.org/t/p/w500/'+ item.poster_path} alt={item.title || item.name} />
                </div>
                <div className="modal-content">
                    <h1>{item.title || item.name}</h1>
                    <span className='rating'>IMDb rating: {(Math.round(item.vote_average) === 0 ? 'Nil' : Math.round(item.vote_average))}</span>
                    <span className='date'>Released on: {item.release_date || item.first_air_date}</span>
                    <p>{item.overview || ``}</p>
                    <Link to={`/single/${type}/${item.id}`}>Read more</Link>
                </div>
            </article>
            <button onClick={() => setShowModal(false)}>Close</button>
        </section>
    )
}

export default Modal
