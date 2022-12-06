import React from 'react'

const CastImg = ({image, name}) => {
    return (
        <>
            <img src={image ? `https://image.tmdb.org/t/p/w500`+ image : 'https://www.pngfind.com/pngs/m/381-3819326_default-avatar-svg-png-icon-free-download-avatar.png'} alt={name} />
        </>
    )
}

export default CastImg
