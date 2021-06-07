import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({
    categories,
    setCategories
}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSave = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }

    return (
        <div>
            <form className='gif-form' onSubmit={handleSave}>
                <input className='gif-form__input' onChange={handleChange} placeholder='categoria' name='categoryInput' />
                <button className='gif-form__button' type='submit'>+</button>
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}

export default AddCategory
