import React from 'react'

function CartItem({item}) {
    return (
        <li className="CartItem">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <span>{item.category}</span>
        </li>
    )
}

export default CartItem