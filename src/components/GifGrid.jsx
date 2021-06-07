import React, { useState, useEffect } from 'react'
import GifItem from './GifItem'
import useFetchGifs from '../hooks/useFetchGifs'

const GifGrid = ({
    categoryName
}) => {
    
    const { data: images, loading } = useFetchGifs({categoryName})

    return (
        <div>
            <h2 className='animate__animated animate__fadeIn'>{categoryName}</h2>
            <div className='gif-list'>
                { loading && <span className='animate__animated animate__flash'>loading...</span> }
                { images.map((img, idx) => (
                    <GifItem
                        key={`${img.title}${idx}`}
                        image={img}
                    />
                ))}
            </div>
        </div>
    )
}

export default GifGrid
