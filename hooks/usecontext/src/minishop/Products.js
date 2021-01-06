import React, { useContext } from 'react'
import Context from '../Context'

export default function ProductCard(props) {
    const { number } = props
    const value = useContext(Context)

    const handlerClick = () => {
        value.count(number)
    }

    return (
        <div style={{ border: '1px solid black', padding: '25px' }}>
            <p>Книга</p>
            <button type="button" onClick={handlerClick}>Купить {number} книгу</button>
        </div>
    )
}