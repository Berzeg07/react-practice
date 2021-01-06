import React from 'react'
import ProductCard from './Products'

export default function ActionsCard() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <ProductCard number={1} />
            <ProductCard number={3} />
            <ProductCard number={5} />
            <ProductCard number={20} />
        </div>
    )
}