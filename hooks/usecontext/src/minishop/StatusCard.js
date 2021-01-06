import React, { useContext } from 'react'
import Context from '../Context'

export default function StatusCard() {

    const value = useContext(Context)

    return (
        <div style={{ marginBottom: '20px' }} > Корзина: {value.counter} книг</div >
    )
}