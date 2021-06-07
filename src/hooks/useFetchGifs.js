import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

const useFetchGifs = ({ categoryName }) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(categoryName)
            .then(imgs => setState({
                data: imgs,
                loading: false
            }))
    }, [categoryName])

    return state
}

export default useFetchGifs
