import React from 'react'

const GifItem = ({
    image
}) => {
    return (
        <div className='gif-list__item'>
            <figure>
                <img
                    className='animate__animated animate__fadeIn animate__delay2'
                    alt={image.title}
                    src={image.url}
                    loading='lazy'
                />
                <figcaption>{image.title}</figcaption>
            </figure>
        </div>
    )
}

export default GifItem
