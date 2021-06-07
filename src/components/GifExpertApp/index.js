import './style.module.css'

import React, { useEffect, useState } from 'react'
import AddCategory from '../AddCategory'
import GifGrid from '../GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    return (
        <div>
            <h2>Gif Expert App</h2>

            <AddCategory
                categories={categories}
                setCategories={setCategories}
            />
            {categories.map(category => (
                <GifGrid
                    categoryName={category}            
                />
            ))}
        </div>
    )
}
