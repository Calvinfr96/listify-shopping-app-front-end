import React from 'react'

function CartItem({name, price, category}) {
    return (
        <li className="CartItem">
            <span>{name}</span>
            <span>${price.toFixed(2)}</span>
            <span>{category}</span>
        </li>
    )
}

export default CartItem