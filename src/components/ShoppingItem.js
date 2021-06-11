import React from 'react'

function ShoppingItem({ name, price, category }) {
    return (
        <li className="ShoppingItem">
            <span>{name}</span>
            <span>${price}</span>
            <span>{category}</span>
            <button>Add to Cart</button>
        </li>
    )
}

export default ShoppingItem